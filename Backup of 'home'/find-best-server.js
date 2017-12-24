hosts = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'CSEC', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'avmnite-02h', 'crush-fitness', 'johnson-ortho', 'the-hub'];


for (i = 0; i < hosts.length; i = i + 1) {
    host = hosts[i];
	
    svrGrowth = getServerGrowth(host);
	svrGrowTime = getGrowTime(host);
	svrWeakenTime = getWeakenTime(host);
    svrHackTime = getHackTime(host);
    svrMinScrLvl = getServerMinSecurityLevel(host);
    svrMaxCash = getServerMaxMoney(host);
	
    
	tprint('--------------------------------------------------');
	tprint('Working on ' + host);
    tprint('---------- ' + host + ' has a Growth Rate of ' + svrGrowth);
    tprint('---------- ' + 'It takes ' + (svrGrowTime) + ' seconds to Grow');
	tprint('---------- ' + 'It takes ' + (svrWeakenTime) + ' seconds to Weaken');
	tprint('---------- ' + 'It takes ' + (svrHackTime) + ' seconds to Hack');
	tprint('---------- ' + host + ' has a minimum security level of ' + svrMinScrLvl);
	tprint('---------- ' + host + ' can have a maximum of $' + svrMaxCash);
}

tprint('--------------------------------------------------');
tprint('********** DONE **********');