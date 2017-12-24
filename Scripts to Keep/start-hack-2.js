//List of host servers
hosts = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'CSEC', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'avmnite-02h', 'crush-fitness', 'johnson-ortho', 'the-hub'];

while((isRunning()) {
    for (i = 0; i < hosts.length; i = i + 1) {
        host = hosts[i];
        vServerRam = getServerRam(host);
        tprint('Working on' + host);

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
        scp('hack-iron-gym.script', (host));
        tprint('"Hack Iron-Gym" Script copied');
        //Print how much ram is available on host
        tprint(getServerRam(host)[0] + 'GB on' + '' + (host));
        //If your hacking level is greater or equal to what is needed to hack the host
        if (getHackingLevel() >= getServerRequiredHackingLevel(host)) {

            //What to do for when the server has 8GB ram
            if (vServerRam[0] == 8.00) {
                exec('hack-iron-gym.script', host, 3, 'iron-gym');
                if (isRunning('hack-iron-gym.script', (host), 'iron-gym')) {
                    tprint('Script is now running with 3 threads');
                }

            //What to do for when the server has 16GB ram   
            } else if (vServerRam[0] == 16.00) {
                exec('hack-iron-gym.script', host, 6, 'iron-gym');
                if (isRunning('hack-iron-gym.script', (host), 'iron-gym')) {
                    tprint('Script is now running with 6 threads');
                }

            //What to do for when the server has 32GB ram    
            } else if (vServerRam[0] == 32.00) {
                exec('hack-iron-gym.script', host, 12, 'iron-gym');
                if (isRunning('hack-iron-gym.script', (host), 'iron-gym')) {
                    tprint('Script is now running with 12 threads');
                }

            //What to do for when the server has 64GB ram
            } else if (vServerRam[0] == 64.00) {
                exec('hack-iron-gym.script', host, 24, 'iron-gym');
                if (isRunning('hack-iron-gym.script', (host), 'iron-gym')) {
                    tprint('Script is now running with 24 threads');
                }
            }
        }
    }
}