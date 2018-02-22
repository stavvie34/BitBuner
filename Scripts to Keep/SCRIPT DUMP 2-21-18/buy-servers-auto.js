purchasedServers = [];

script = args[0];
target = args[1];
scriptRam = getScriptRam('base-target.script', 'home');

currentPurchasedServers = getPurchasedServers();

//Start at the max number of possible servers you can buy. Keep buying until that number is 0. 
for (i = 25; i > 0; i = i - 1) {
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
}

tprint('///////////////////////////////////');
tprint('---------- *** DONE! *** ----------');
tprint('///////////////////////////////////');