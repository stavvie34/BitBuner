target = args[0];

moneyThresh = getServerMaxMoney(target) * 0.9;
// moneyThresh = 100000;
securityThresh = round(getServerBaseSecurityLevel(target) / 3) + 2;

while (true) {
	if (getServerSecurityLevel(target) > securityThresh) {
		//If the server's security level is above our threshold, weaken it
		weaken(target);
	} 	else {
		//svrSecurityLvl = getServerSecurityLevel(target);
		//svrBaseSecurityLvl = getServerBaseSecurityLevel(target);


		if (getServerMoneyAvailable(target) < moneyThresh) {
			//If the server's money is less than our threshold, grow it
			grow(target);
		} else {
    		//Otherwise, hack it
    		hack(target);
		}
	}
}