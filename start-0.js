hosts = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'CSEC', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'avmnite-02h', 'crush-fitness', 'johnson-ortho', 'the-hub'];

while(true) {
    for (i = 0; i < hosts.length; i = i + 1) {
		host = hosts[i];
		vServerRam = getServerRam(host)
        tprint(host);
        if (hasRootAccess(host) == false) {
            if (fileExists('brutessh.exe') == true)
                brutessh(host);
            if (fileExists('ftpcrack.exe') == true)
                ftpcrack(host);
            if (fileExists('relaysmtp.exe') == true)
                relaysmtp(host);
            if (fileExists('httpwork.exe') == true)
                httpworm(host);
            if (fileExists('sqlinject.exe') == true)
                sqlinject(host);
            nuke(host);
		};
        if (hasRootAccess(host) == true) {
			tprint('Root Access Gained');
		};
		scp('hack-iron-gym.script', (host));
		tprint('"Hack Iron-Gym" Script copied');
        };
		tprint(getServerRam(host));
        if (getHackingLevel() >= getServerRequiredHackingLevel(host)) {
            if (vServerRam[0] == 8.00) {
				exec('hack-iron-gym.script', host, 3, 'iron-gym');
				tprint('Threads run for 8GB server');
			} else if (vServerRam[0] == 16.00) {
				exec('hack-iron-gym.script', host, 6, 'iron-gym');
				tprint('Threads run for 16GB server');
				} else if (vServerRam[0] == 32.00) {
						exec('hack-iron-gym.script', host, 12, 'iron-gym');
						tprint('Threads run for 32GB server');
					} else if (vServerRam[0] == 64.00) {
							exec('hack-iron-gym.script', host, 24, 'iron-gym');
							tprint('Threads run for 64GB server');
						};
		};
    };