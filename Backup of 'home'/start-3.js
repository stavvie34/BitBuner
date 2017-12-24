//List of host servers ----- only 2 ports
hosts = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'CSEC', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'avmnite-02h', 'crush-fitness', 'johnson-ortho', 'the-hub'];


exec('secondary.script', 'home');

//scan through list of hosts continually
//Works on 1 port or less servers if you don't have FTPCrack.exe
while (fileExists('FTPCrack.exe', 'home') === false) {
    
	//Continously run this loop
	while (true) {
        for (i = 0; i < hosts.length; i = i + 1) {
            currentHost = hosts[i];
            userHackLvl = getHackingLevel(currentHost);
            serverHackLvl = getServerRequiredHackingLevel(currentHost);
            serverPortReq = getServerNumPortsRequired(currentHost);
            
            //If the server only needs 1 port open
            if (serverPortReq < 2) {
                //And if the user hack level is greater or equal to the sever hack level
                if (userHackLvl >= serverHackLvl) {
                    
                    //if the user does NOT have root access
                    if (hasRootAccess(currentHost) === false) {
                        //Open the port, nuke, copy script, execute script
                        brutessh(currentHost);
                        nuke(currentHost);
                        scp('secondary.script', 'home', currentHost);
                        exec('secondary.script');
                    } else {
                        tprint('User already has Root access on ' + currentHost);
                        
						if (scriptRunning('secondary.script', currentHost) === true) {
                        //Print to the terminal that it's already running
                        	tprint('The script is already running on ' + currentHost);
						}
                    }
                } else {
					tprint('User hack level is not enough to hack ' + (currentHost));
				}
			} else {
				tprint((currentHost) + ' requires more than 1 port to be opened');
			}
		}
	}
}


while (fileExists('FTPCrack.exe', 'home') === true) {
    
	//Continously run this loop
	while (true) {
        for (i = 0; i < hosts.length; i = i + 1) {
            currentHost = hosts[i];
            userHackLvl = getHackingLevel((currentHost));
            serverHackLvl = getServerRequiredHackingLevel((currentHost));
            serverPortReq = getServerNumPortsRequired((currentHost));
            
            //If the server only needs 1 port open
            if ((serverPortReq) >= 2) {
                //And if the user hack level is greater or equal to the sever hack level
                if ((userHackLvl) >= (serverHackLvl)) {
                    
                    //if the user does NOT have root access
                    if (hasRootAccess(currentHost) === false) {
                        //Open the port, nuke, copy script, execute script
                        brutessh((currentHost));
						ftpcrack((currentHost));
                        nuke((currentHost));
                        scp('secondary.script', 'home', (currentHost));
                        exec('secondary.script');
                        
                    } else {
                        tprint('User already has Root access on ' + (currentHost));
                        
						if (scriptRunning('secondary.script', (currentHost)) === true) {
                        //Print to the terminal that it's already running
                        	tprint('The script is already running on ' + (currentHost));
						}
                    }
                } else {
					tprint('User hack level is not enough to hack ' + (currentHost));
				}
			} else {
				tprint((currentHost) + ' requires more than 2 ports to be opened');
			}
		}
	}
}