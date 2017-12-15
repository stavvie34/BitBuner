hosts = Array['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'CSEC', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'avmnite-02h', 'crush-fitness', 'johnson-ortho', 'the-hub', 'I.I.I.I', 'comptek', 'rothman-uni', 'netlink', 'catalyst', 'summit-uni', 'syscore', 'zb-institute'];
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
        };
        if (getHackingLevel() >= getServerRequiredHackingLevel(host)) {         
            for (j = 0; j < 5; j = j + 1)
                if (isRunning('dynamic.script', 'home', host, j) == false)
                    exec('dynamic.script', 'home', 15, host, j);
        };
    };
};


//Define variables

targetEight = ["nectar-net"];
targetSixteen = ["foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi"];
targetsThirtytwo = ["zer0", "max-hardware", "neo-net", "phantasy", "omega-net"];
targetsSixtyfour = ["silver-helix"]

// 8GB SERVERS
//Open port, gain ROOT access, use to attack iron-gym, 8gb

i = 0;

while(i < targetEight.length) {
//If you have BruteSSH, open the port of the target server
    if (fileExists("BruteSSH.exe", "home")) {
        brutessh(targetEight[i]);
    }
	if (fileExists("FTPCrack.exe", "home")) {
		ftpcrack(targetEight[i]);
	}
	//Nuke target server, copy iron-gym hack onto it, execute the hack script
    nuke(targetEight[i]);
    scp('hack-iron-gym.script', targetEight[i]);
    exec('hack-iron-gym.script', targetEight[i], 3, 'iron-gym');
    
    ++i;
}

//16GB SERVERS
//Open port, gain ROOT access, use to attack iron-gym. 16gb

i = 0;

while(i < targetSixteen.length) {
//If you have BruteSSH, open the port of the target server
    if (fileExists("BruteSSH.exe", "home")) {
        brutessh(targetSixteen[i]);
    }
	if (fileExists("FTPCrack.exe", "home")) {
		ftpcrack(targetSixteen[i]);
	}
	//Nuke target server, copy iron-gym hack onto it, execute the hack script
    nuke(targetSixteen[i]);
    scp('hack-iron-gym.script', targetSixteen[i]);
    exec('hack-iron-gym.script', targetSixteen[i], 6, 'iron-gym');
    
    ++i;
}

//32GB SERVERS
//Open port, gain ROOT access, use to attack iron-gym. 32gb


i = 0;

while(i < targetsThirtytwo.length) {
//If you have BruteSSH, open the port of //If you have BruteSSH, open the port of the target server
    if (fileExists("BruteSSH.exe", "home")) {
        brutessh(targetsThirtytwo[i]);
    }
	if (fileExists("FTPCrack.exe", "home")) {
		ftpcrack(targetsThirtytwo[i]);
	}
	//Nuke target server, copy iron-gym hack onto it, execute the hack script
    nuke(targetsThirtytwo[i]);
    scp('hack-iron-gym.script', targetsThirtytwo[i]);
    exec('hack-iron-gym.script', targetsThirtytwo[i], 12, 'iron-gym');
    
    ++i;
}

//64GB SERVERS
//Open port, gain ROOT access, use to attack iron-gym. 32gb


i = 0;

while(i < targetsSixtyfour.length) {
//If you have BruteSSH, open the port of //If you have BruteSSH, open the port of the target server
    if (fileExists("BruteSSH.exe", "home")) {
        brutessh(targetsSixtyfour[i]);
    }
	if (fileExists("FTPCrack.exe", "home")) {
		ftpcrack(targetsSixtyfour[i]);
	}
	//Nuke target server, copy iron-gym hack onto it, execute the hack script
    nuke(targetsSixtyfour[i]);
    scp('hack-iron-gym.script', targetsSixtyfour[i]);
    exec('hack-iron-gym.script', targetsSixtyfour[i], 24, 'iron-gym');
    
    ++i;
}