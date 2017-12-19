hosts = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'CSEC', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'avmnite-02h', 'crush-fitness', 'johnson-ortho', 'the-hub'];


for (i = 0; i < hosts.length; i = i + 1) {
    host = hosts[i];
    svrWeakenTime = getWeakenTime(host);
    svrHackTime = getHackTime(host);
    svrGrowTime = getGrowTime(host);
    svrMinScrLvl = getServerMinSecurityLevel(host);
    svrMaxCash = getServerMaxMoney(host);
	svrGrowth = getServerGrowth(host);
    
    tprint('There is ' + serverRam[0] + 'GB of RAM on ' + host);
}


best = 
lowest weaken time
lowest hack time
lowest grow time
lowest minsecuritylevel
greatest amount of max cash
greatest growth parameter