script = args[0];
target = args[1];

purchasedServers = [];

scriptRam = getScriptRam('base-target.script', 'home');
allServerRam = getScriptRam('all-server.script', 'home');
homeMoney = getServerMoneyAvailable('home');
moneyPossibleServers = Math.floor(homeMoney / 51200000);
currentPurchasedServers = getPurchasedServers();
limitServers = (25 - currentPurchasedServers.length);
maxPossibleServers = Math.min(moneyPossibleServers, limitServers);

if ((prompt('About to purchase ' + maxPossibleServers + '. Would you like to continue?')) === true) {
    //Start at the max number of possible servers you can buy. Keep buying until that number is 0. 
    for (i = maxPossibleServers; i > 0; i = i - 1) {
    	purchasedServersArray = getPurchasedServers();
    	j = purchasedServersArray.length;
    	currentPurchasedServer = ('server-' + (j + 1));
    	purchaseServer(currentPurchasedServer, 1024);
    	tprint('Purchased a server and named it ' + currentPurchasedServer + '.');
    	purchasedServers.push(currentPurchasedServer);
    
    	totalRam = (getServerRam(currentPurchasedServer)[0]);
    	usedRam = (getServerRam(currentPurchasedServer)[1]);
    	maxThreads = (Math.floor((totalRam) / (scriptRam)));
    
    	scp(script, currentPurchasedServer);
    	exec(script, currentPurchasedServer, maxThreads, target);
    	tprint('Script is now running on ' + currentPurchasedServer + '.');
    	tprint('Moving on to next server.');
    	tprint('15 seconds...');
    	sleep(5000);
    	tprint('10 seconds...');
    	sleep(5000);
    	tprint('5 seconds...');
    	sleep(4000);
    	tprint('1 second...');
    }
} else {
    tprint('Okay. Quiting...');
}