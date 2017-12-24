//List of host servers ----- only 2 ports
hosts = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'CSEC', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'avmnite-02h', 'crush-fitness', 'johnson-ortho', 'the-hub'];

//scan through list of hosts continually
//Works on 1 port or less servers if you don't have FTPCrack.exe
while (fileExists('FTPCrack.exe', 'home') === false) {
    for (i = 0; i < hosts.length; i = i + 1) {
		target = hosts[i];
		//Change value here to target more or less of the max money
		moneyThresh = getServerMaxMoney(target) * 0.75;
		securityThresh = round(getServerBaseSecurityLevel(target) / 3) + 2;
		currentMoney = getServerMoneyAvailable(target);
		portsReq = getSeverNumPortsRequired(target);
		
		if (portsReq < 2)
			//While there is still money on the server
			while(currentMoney > 0) {
				if (getServerSecurityLevel(target) > securityThresh) {
					//If the server's security level is above our threshold, weaken it
					weaken(target);
				} else if (currentMoney < moneyThresh) {
					//If the server's money is less than our threshold, grow it
					grow(target);
				} else {
					//Otherwise, hack it
					hack(target);
				}
			}
		}
	}
}

//scan through list of hosts continually
//Works on 2 port
while (fileExists('FTPCrack.exe', 'home') === true) {
    for (i = 0; i < hosts.length; i = i + 1) {
		target = hosts[i];
		//Change value here to target more or less of the max money
		moneyThresh = getServerMaxMoney(target) * 0.75;
		securityThresh = round(getServerBaseSecurityLevel(target) / 3) + 2;
		currentMoney = getServerMoneyAvailable(target);
		portsReq = getSeverNumPortsRequired(target);
		
		
		if (portsReq >= 2)
			//While there is still money on the server
			while(currentMoney > 0) {
				if (getServerSecurityLevel(target) > securityThresh) {
					//If the server's security level is above our threshold, weaken it
					weaken(target);
				} else if (currentMoney < moneyThresh) {
					//If the server's money is less than our threshold, grow it
					grow(target);
				} else {
					//Otherwise, hack it
					hack(target);
				}
			}
		}
	}
}