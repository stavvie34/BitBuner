hosts = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'CSEC', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'avmnite-02h', 'crush-fitness', 'johnson-ortho', 'the-hub'];
while(true) {
    for (i = 0; i < hosts.length; i = i + 1) {
        host = hosts[i];
        print(host);
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
            print('nuked');
			scp('hack-iron-gym.script', (host));
			print('"Hack Iron-Gym" Script copied')
        };
        if (getHackingLevel() >= getServerRequiredHackingLevel(host)) {         
            if (getServerRam(host) == 8.00) {
				exec('hack-iron-gym.script', host, 3, 'iron-gym');
			} else if (getServerRam(host) == 16.00) {
				exec('hack-iron-gym.script', host, 6, 'iron-gym');
				} else if (getServerRam(host) == 32.00) {
						exec('hack-iron-gym.script', host, 12, 'iron-gym');
					} else if (getServerRam(host) == 64.00) {
							exec('hack-iron-gym.script', host, 24, 'iron-gym');
						};
		};
    };
};