pSrvs = ['server-0', 'server-1', 'server-2', 'server-3', 'server-4', 'server-5', 'server-6', 'server-7', 'server-8', 'server-9', 'server-10', 'server-11', 'server-12', 'server-13', 'server-14', 'server-15', 'server-16', 'server-17', 'server-18', 'server-19', 'server-20', 'server-21', 'server-22', 'server-23', 'server-24'];

Srvs = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'crush-fitness', 'johnson-ortho', 'the-hub', 'comptek', 'netlink', 'rothman-uni', 'catalyst', 'summit-uni', 'rho-construction', 'millenium-fitness', 'aevum-police', 'alpha-ent', 'syscore', 'lexo-corp', 'snap-fitness', 'global-pharm', 'applied-energetics', 'unitalife', 'nova-med', 'zb-def', 'zb-institute', 'vitalife', 'titan-labs', 'solaris', 'microdyne', 'helios', 'deltaone', 'icarus', 'omnia', 'defcomm', 'galactic-cyber', 'infocomm', 'taiyang-digital', 'stormtech', 'aerocorp', 'clarkeinc', 'omnitek', '4sigma', 'blade', 'b-and-a', 'ecorp', 'fulcrumtech', 'megacorp', 'kuai-gong', 'fulcrumassets', 'powerhouse-fitness'];


tprint('////////////////////////////////////////');
tprint('---------- Working on Servers ----------');
tprint('////////////////////////////////////////');


//Copy scripts and run on servers
for (i = 0; i < Srvs.length; i = i + 1) {
	currentSrv = Srvs[i];
	numPortsRequired = (getServerNumPortsRequired(currentSrv));
	portBusters = ['BruteSSH.exe', 'FTPCrack.exe', 'relaySMTP.exe', 'HTTPWorm.exe', 'SQLInject.exe'];
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
			tprint('Successfuly gained root access on ' + currentSrv);

			scp('main-script-other-servers.script', currentSrv);
			scp('RemoteGrow.script', currentSrv);
			scp('RemoteHack.script', currentSrv);
			scp('RemoteWeaken.script', currentSrv);
			tprint('Scripts copied to ' + currentSrv);

			exec('main-script-other-servers.script', currentSrv, 1, currentSrv);

			//If the main-server script is running on the server
			if ((isRunning('main-script-other-servers.script', currentSrv, currentSrv)) === true) {
				tprint(currentSrv + ' is now runnning main-script-other-servers.script');
				tprint('------------------------------');
			} else {
				tprint('There was an error, and the script is not running on ' + currentSrv);
				tprint('------------------------------');
			}
		}

		//If you still don't have Root access.
		if (hasRootAccess(currentSrv) === false) {
			tprint('You do not have root access on ' + currentSrv + '. Skipping to next server...');
			tprint('------------------------------');
		}
		
	} else {
		tprint('You either do not have enough port busters,');
		tprint('or ' + currentSrv + ' does not have enough Ram.');
		tprint('Skipping to next server...');
		tprint('------------------------------');
	}
}	
	

tprint('///////////////////////////////////////////////////////////////////////');
tprint('---------- Successfully ran main script on all servers ----------');
tprint('///////////////////////////////////////////////////////////////////////');
tprint(' ');
tprint('//////////////////////////////////////////////////////');
tprint('---------- Working on purchased servers ... ----------');
tprint('//////////////////////////////////////////////////////');


for (j = 0; j < pSrvs.length; j = j + 1) {
	currentPSrv = pSrvs[j];
	targetSrv = Srvs[j];

	scp('main-script-other-servers.script', currentPSrv);
	scp('RemoteGrow.script', currentPSrv);
	scp('RemoteHack.script', currentPSrv);
	scp('RemoteWeaken.script', currentPSrv);
	tprint('Scripts copied to ' + currentPSrv);

	exec('main-script-other-servers.script', currentPSrv, 1, targetSrv);

	//If the main-server script is running on the server
	if ((isRunning('main-script-other-servers.script', currentPSrv, targetSrv)) === true) {
		tprint(currentPSrv + ' is now runnning main-script-other-servers.script');
		tprint('------------------------------');
	} else {
		tprint('There was an error, and the script is not running on ' + currentPSrv);
		tprint('------------------------------');
	}
}


tprint('///////////////////////////////////////////////////////////////////////////');
tprint('---------- Successfully ran main script on all purchased servers ----------');
tprint('///////////////////////////////////////////////////////////////////////////');
tprint(' ');
tprint('///////////////////////////////////');
tprint('---------- *** DONE! *** ----------');
tprint('///////////////////////////////////');