//Listens to how many port busters you have.
//If you get a new one, it runs a script...


if you have 




portBusters = ['BruteSSH.exe', 'FTPCrack.exe', 'relaySMTP.exe', 'HTTPWorm.exe', 'SQLInject.exe'];
a = [];
currentPortBusters = ();





while ((currentPortBusters.length) < 5) {
	
	if ((fileExists('BruteSSH.exe', 'home')) === true) {
		currentPortBusters.push('BruteSSH.exe');
	}
	if ((fileExists('BruteSSH.exe', 'home')) === true) {
		currentPortBusters.push('FTPCrack.exe');
	}
	if ((fileExists('BruteSSH.exe', 'home')) === true) {
		currentPortBusters.push('relaySMTP.exe');
	}
	if ((fileExists('BruteSSH.exe', 'home')) === true) {
		currentPortBusters.push('HTTPWorm.exe');
	}
	if ((fileExists('BruteSSH.exe', 'home')) === true) {
		currentPortBusters.push('SQLInject.exe');
	}
	
	sleep()
}

//Copy scripts and run on servers
for (i = 0; i < Srvs.length; i = i + 1) {
	currentSrv = Srvs[i];
	numPortsRequired = (getServerNumPortsRequired(currentSrv));
    numPortBreakers = 0;
	currentSrvAvailableRam = ((getServerRam(currentSrv)[0]) - (getServerRam(currentSrv)[1]));
	reqScriptRam = (getScriptRam('main-script-other-servers.script', 'home'));
	
	
    for (j = 0; j < portBusters.length; j++) {
        if (fileExists(portBusters[j], 'home')) {
            numPortBreakers++;
        }
    }
	
	
	//If there is enough RAM on target server to even run the script, AND you have the ability to gain Root access.
	if ((currentSrvAvailableRam >= reqScriptRam) && (numPortBreakers > numPortsRequired)) {
		//If you don't already have Root access.
		if (hasRootAccess(currentSrv) === false) {
			if (numPortBreakers > 4)
				sqlinject(currentSrv);
			if (numPortBreakers > 3)
				httpworm(currentSrv);
			if (numPortBreakers > 2)
				relaysmtp(currentSrv);
			if (numPortBreakers > 1)
				ftpcrack(currentSrv);
			if (numPortBreakers > 0)
				brutessh(currentSrv);
			nuke(currentSrv);
		} else {