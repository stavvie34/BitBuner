target = args[0];

moneyThresh = getServerMaxMoney(target) * 0.30;
securityThresh = round(getServerBaseSecurityLevel(target) / 3) + 2;


if (hasRootAccess(target) === false) {
    if (fileExists('brutessh.exe', 'home') === true)
        brutessh(target);
    if (fileExists('ftpcrack.exe') === true)
        ftpcrack(target);
    if (fileExists('relaysmtp.exe') === true)
        relaysmtp(target);
    if (fileExists('httpwork.exe') === true)
        httpworm(target);
    if (fileExists('sqlinject.exe') === true)
        sqlinject(target);

    nuke(target);
    
}

while (true) {
	if (getServerSecurityLevel(target) > securityThresh) {
		//If the server's security level is above our threshold, weaken it
		weaken(target);
	} 	else {
		svrSecurityLvl = getServerSecurityLevel(target);
		svrBaseSecurityLvl = getServerBaseSecurityLevel(target);


		if (getServerMoneyAvailable(target) < moneyThresh) {
			//If the server's money is less than our threshold, grow it
			grow(target);
		} else {
    		//Otherwise, hack it
    		hack(target);
		}
	}
}