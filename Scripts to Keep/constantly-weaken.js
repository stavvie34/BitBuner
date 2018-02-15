servers = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea'];
// servers = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'crush-fitness', 'johnson-ortho', 'the-hub', 'comptek', 'netlink', 'rothman-uni', 'catalyst', 'summit-uni', 'rho-construction', 'millenium-fitness', 'aevum-police', 'alpha-ent', 'syscore', 'lexo-corp', 'snap-fitness', 'global-pharm', 'applied-energetics', 'unitalife', 'nova-med', 'zb-def', 'zb-institute', 'vitalife', 'titan-labs', 'solaris', 'microdyne', 'helios', 'deltaone', 'icarus', 'omnia', 'defcomm', 'galactic-cyber', 'infocomm', 'taiyang-digital', 'stormtech', 'aerocorp', 'clarkeinc', 'omnitek', '4sigma', 'blade', 'b-and-a', 'ecorp', 'fulcrumtech', 'megacorp', 'kuai-gong', 'fulcrumassets', 'powerhouse-fitness'];
eligibleServers = [];
optimalServers = [];
// serverBaseSecurityLevel = [];
// serverMinSecurityLevel = [];
// serverThreadsNeeded = [];
// serverRamNeeded = [];
//script = args[0];
// purchasedServers = [];
portBusters = [];

////////////////////////////////////
// WRITTEN FOR WEAKEN ONLY RIGHT NOW
////////////////////////////////////

// Determining how many port busters you have
if (fileExists('brutessh.exe', 'home') === true) {
	portBusters.push('brutessh.exe');
	tprint('You own BruteSSH.exe');
}

if (fileExists('ftpcrack.exe', 'home') === true) {
	portBusters.push('ftpcrack.exe');
	tprint('You own FTPCrack.exe');
}

if (fileExists('relaysmtp.exe', 'home') === true) {
	portBusters.push('relaysmtp.exe');
	tprint('You own relaySMTP.exe');
}

if (fileExists('httpworm.exe', 'home') === true) {
	portBusters.push('httpworm.exe');
	tprint('You own HTTPWorm.exe');
}

if (fileExists('sqlinject.exe', 'home') === true) {
	portBusters.push('sqlinject.exe');
	tprint('You own SQLInject.exe');
}


tprint('////////////////////////////////////');
tprint('Creating list of eligible servers...');
tprint('////////////////////////////////////');

// Looks at user hack level and makes a list of elegible servers
for (i = 0; i < servers.length; i = i + 1) {
	tprint('------------------------------');
	currentServer = servers[i];
	
	percentComplete = Math.round((i / servers.length) * 100) + '%';
	serversLeft = servers.length - i;
	
	requiredHackingLevel = getServerRequiredHackingLevel(currentServer);
	userHackingLevel = getHackingLevel();
	requiredPortBusters = getServerNumPortsRequired(currentServer);
			
	// If your hacking level is great enough, AND you have enough port busters, push that server name to an array
	if (((requiredHackingLevel <= userHackingLevel) === true) && ((requiredPortBusters <= portBusters.length) === true)) {
		eligibleServers.push(currentServer);
		print(currentServer + ' has been added to the list of eligible servers.');
	} else {
		print(currentServer + ' was not added to the list of eligible servers.');
	}
	
	// Continually let you know how its going...
	tprint(percentComplete + ' complete. ' + serversLeft + ' servers left to go.');	
}

tprint('--- DONE! ---');

tprint('///////////////////////////////////////');
tprint('Finished creating eligible server list.');
tprint('These are the servers you can hack...');
tprint(eligibleServers);
tprint('///////////////////////////////////////');

sleep(1500);

tprint('');
tprint('///////////////////////////////////');
tprint('Finding optimal server...');
tprint('///////////////////////////////////');

tprint('Storing the length of eligible servers...');
eligibleServerLength = eligibleServers.length;
tprint('The list of eligible servers is ' + eligibleServerLength);

tprint('Pushing eligible servers to the optimalservers array...');
// Copy eligible servers to optimal servers
optimalServers.push(eligibleServers);
tprint('optimalServers array = ' + optimalServers);

// The index in the optimal server list for the current server
optimalServerPosition = 0;
tprint('The initial optimalServerPosition is ' + optimalServerPosition);

for (i = 0; i < eligibleServerLength; i = i + 1) {
	tprint('------------------------------');
	
	percentComplete = Math.round((i / eligibleServers.length) * 100) + '%';
	serversLeft = eligibleServers.length - i;
	
	currentServer = eligibleServers[i];
	nextServer = eligibleServers[i + 1];
	previousServer = eligibleServers[i - 1];
	
	currentOptimalServer = optimalServers[i];
	
	
	tprint('Working on ' + currentServer + '.');

	// Variables for the current server
	maxMoney = getServerMaxMoney(currentServer);
	hackTime = getHackTime(currentServer);
	growTime = getGrowTime(currentServer);
	weakenTime = getWeakenTime(currentServer);
	magicNumber = maxMoney / (hackTime * growTime * weakenTime);
	tprint(currentServer + ' is the current server and its magicNumber is ' + magicNumber + '.');
	
	// Variables for the next server
	maxMoneyNext = getServerMaxMoney(nextServer);
	hackTimeNext = getHackTime(nextServer);
	growTimeNext = getGrowTime(nextServer);
	weakenTimeNext = getWeakenTime(nextServer);
	magicNumberNext = maxMoneyNext / (hackTimeNext * growTimeNext * weakenTimeNext);
	tprint(nextServer + ' is the next server and its magicNumber is ' + magicNumberNext + '.');
	
	if (i === 0) {
		print('Ignoring previous server, because current server is the first in the list.');
	} else {
		// Variables for the previous server
		maxMoneyPrevious = getServerMaxMoney(previousServer);
		hackTimePrevious = getHackTime(previousServer);
		growTimePrevious = getGrowTime(previousServer);
		weakenTimePrevious = getWeakenTime(previousServer);
		magicNumberPrevious = maxMoneyPrevious / (hackTimePrevious * growTimePrevious * weakenTimePrevious);
		tprint(previousServer + ' is the previous server and its magicNumber is ' + magicNumberPrevious + '.');
	}
	
	

	tprint('The current optimalServerPosition is ' + optimalServerPosition + '.');
	// The index in the optimal server list for the server just before the current server
	optimalServerPositionPrevious = optimalServerPosition - 1;
	tprint('The current optimalServerPositionPrevious is ' + optimalServerPositionPrevious);
	
	// If it is the first server, do not check the previous non-existant server
	if (i === 0) {
		//If the current server is not as good as the next one in the list
		if (magicNumber < magicNumberNext) {
			// Remove the less optimal server from the array
			optimalServers.splice(optimalServerPosition, 1);
			print(currentServer + ' has been removed from optimal server list.');
		}
	} else {
		if (i === eligibleServers.length) {
			// If the current server is better than the next server, but not as good as the last server
			if (magicNumber < magicNumberPrevious) {
				// Remove the less optimal server from the array
				optimalServers.splice(optimalServerPosition, 1);
				print(currentServer + ' has been removed from optimal server list.');
			} else {
				// Remove the less optimal server from the array
				optimalServers.splice(optimalServerPositionPrevious, 1);
				print('A previous server has been removed from optimal server list.');
			}
		} else {
			// If the current server is not as good as the next one in the list
			if (magicNumber < magicNumberNext) {
				// Remove the less optimal server from the array
				optimalServers.splice(optimalServerPosition, 1);
				print(currentServer + ' has been removed from optimal server list.');
			} else {
				// Do not check the previous position if this is the first position
				if (optimalServerPosition === 0)  {		
					print('optimalServerPosition = 0, so the server is not removed from the list.');
					print('Original optimalServerPosition = ' + optimalServerPosition);
					print('Adding 1 to optimalServerPosition...');
					optimalServerPosition = optimalServerPosition + 1;
					print('optimalServerPosition = ' + optimalServerPosition);
				} else {
					// If the current server is better than the next server, but not as good as the last server
					if (magicNumber < magicNumberPrevious) {
						// Remove the less optimal server from the array
						optimalServers.splice(optimalServerPosition, 1);
						print(currentServer + ' has been removed from optimal server list.');
					} else {
						// Remove the less optimal server from the array
						optimalServers.splice(optimalServerPositionPrevious, 1);
						print('A previous server has been removed from optimal server list.');
					}
				}
			}
		}		
	}
	tprint('Current optimal server list...');
	tprint(optimalServers);
}


tprint('//////////////////////////////////////////////////////');
tprint('Finished finding optimal server.');
tprint('The best server to focus on is ' + optimalServers + '.');
tprint('//////////////////////////////////////////////////////');
























// Goes through the eligible server array, finds the base security, the min security, and the threads needed
for (i = 0; i < eligibleServers.length; i = i + 1) {
	tprint('------------------------------');
	currentServer = eligibleServers[i];
	
	percentComplete = Math.round((i / eligibleServers.length) * 100) + '%';
	serversLeft = eligibleServers.length - i;
	
	baseSecurity = getServerBaseSecurityLevel(currentServer);
	minSecurity = Math.max(1, Math.round(baseSecurity / 3));
	threadsNeeded = (baseSecurity - minSecurity) / 0.05;
	ramNeeded = threadsNeeded * 1.55;
	
	// Add the base security level of the current server to the appropriate array
	serverBaseSecurityLevel.push(baseSecurity);
	// Add the min security level of the current server to the appropriate array
	serverMinSecurityLevel.push(minSecurity);
	// Add the threads needed to the appropriate array
	serverThreadsNeeded.push(threadsNeeded);
	// Add the ram needed to the appropriate array
	serverRamNeeded.push(ramNeeded);
	
	tprint(percentComplete + ' complete. ' + serversLeft + ' servers left to go.');	
}

// Buy the 1st server
purchaseServer('server-1', 1024);

if 



while ((getServerRamAvailable('server-1')[0] - getServerRamAvailable('server-1')[1]) > 2) {
	
}






for (i = 0; i < purchasedServers.length; i = i + 1) {
	while (getServerRamAvailable[0] - getServerRamAvailable[1])
}
 
for (i = 0; i < servers.length; i = i + 1) {
	currentServer = servers[i];
	
	if (serverRamNeeded[i] < 1024) {
		exec(script, purchasedServers)
	}
	exec(script, d)
}




for (i = 0; i < servers.length; i = i + 1) {
	if (serverExists('server-1') === false) {
		purchaseServer('server-1', 1024);
	}
	
	
}



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
}

//Calculates how many threads you can do
function threadCount() {
    //Change if you want a smaller server size
    pserverRam = 1024;
    // Weaken = 1.55
    // Grow = 1.55
    // Hack = 1.55
    scriptRam = 1.55;
    
    maxThreads = Math.floor(((pserverRam / scriptRam) / servers.length));
    
    //tprint('You will be running RemoteWeaken.script on servers with ' + maxThreads + ' threads.');
    return maxThreads;
}

scp(script, 'home', 'server-1');

for (i = 0; i < servers.length; i++) {
    currentServer = servers[i];

    exec(script, 'server-1', threadCount(), currentServer);
}

tprint('Finished executing ' + desire + ' on servers in array.');






Whoops, was not aware that this information wasn't on the in-game documentation...

Yes a server's minimum security is 1/3 of its starting security. Or to be more exact


You can find a server's starting security with the Netscript function getServerBaseSecurityLevel():

http://bitburner.wikia.com/wiki/Netscript_Functions#getServerBaseSecurityLevel.28hostname.2Fip.29

There will be a "Hacking Mechanics" page added to the wiki soon

weaken decreases the security level by 0.05 per thread
