target = args[0];
//moneyThresh = getServerMaxMoney(target) * 1.0;
//securityThresh = round(getServerBaseSecurityLevel(target) / 3) + 2;

while(true) {
    //if (getServerSecurityLevel(target) > securityThresh) {
        //If the server's security level is above our threshold, weaken it
        //weaken(target);
    //} else 
    
    //svrSecurityLvl = getServerSecurityLevel(target);
    //svrBaseSecurityLvl = getServerBaseSecurityLevel(target);
    
    
    if (getServerMoneyAvailable(target) < getServerMaxMoney(target)) {
        //If the server's money is less than our threshold, grow it
        grow(target);
    } else {
        //Otherwise, hack it
        if (getServerSecurityLevel(target) === getServerBaseSecurityLevel(target)) {
            hack(target);
        }
    }
}