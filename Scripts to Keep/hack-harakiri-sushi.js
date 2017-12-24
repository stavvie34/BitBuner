//moneyThresh = getServerMaxMoney(target) * 1.0;
//securityThresh = round(getServerBaseSecurityLevel(target) / 3) + 2;

while(true) {
    //if (getServerSecurityLevel(target) > securityThresh) {
        //If the server's security level is above our threshold, weaken it
        //weaken(target);
    //} else 
    
    //svrSecurityLvl = getServerSecurityLevel(target);
    //svrBaseSecurityLvl = getServerBaseSecurityLevel(target);
    
    
    if (getServerMoneyAvailable('harakiri-sushi') < getServerMaxMoney('harakiri-sushi')) {
        //If the server's money is less than our threshold, grow it
        grow('harakiri-sushi');
    } else {
        //Otherwise, hack it
        if (getServerSecurityLevel('harakiri-sushi') === 5) {
            hack('harakiri-sushi');
        }
    }
}