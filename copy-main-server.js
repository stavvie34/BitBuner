//List of host servers
hosts = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'CSEC', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'avmnite-02h', 'crush-fitness', 'johnson-ortho', 'the-hub'];

while(true) {
    for (i = 0; i < hosts.length; i = i + 1) {
        host = hosts[i];
        vServerRam = getServerRam(host);
        tprint('------------------------------');
        tprint('Working on ' + host);

		//Use programs to open ports, to gain ROOT access
		if (hasRootAccess(host) === false) {
			if (fileExists('brutessh.exe') === true)
				brutessh(host);
			if (fileExists('ftpcrack.exe') === true)
				ftpcrack(host);
			if (fileExists('relaysmtp.exe') === true)
				relaysmtp(host);
			if (fileExists('httpwork.exe') === true)
				httpworm(host);
			if (fileExists('sqlinject.exe') === true)
				sqlinject(host);
			nuke(host);
		}
            
		if (hasRootAccess(host) === true) {
			tprint('Root Access Gained');
		}
            
        
        //Copy the hack script to host
            
		if (fileExists('main-server.script', (host)) === false) {
				scp('main-server.script', (host));
		}
		if (fileExists('RemoteGrow.script', (host)) === false) {
				scp('RemoteGrow.script', (host));
		}
		if (fileExists('RemoteHack.script', (host)) === false) {
				scp('RemoteHack.script', (host));
		}
		if (fileExists('RemoteWeaken.script', (host)) === false) {
				scp('RemoteWeaken.script', (host));
		}


		if (fileExists('main-server.script', (host)) === true); {
			if (fileExists('RemoteGrow.script', (host)) === true); {
				if (fileExists('RemoteHack.script', (host)) === true); {
					if (fileExists('RemoteWeaken.script', (host)) === true); {
						tprint('All necessary scripts exist on host');
							if (vServerRam[0] >= 20.00); {
								exec('main-server.script', host);
							}
					}
				}
			}
		} 
                    
		if (isRunning('main-server.script', (host))) {
			tprint('Script is now running');
		}
    }
}