// topServers = ['phantasy', 'the-hub', 'silver-helix', 'omega-net', 'alpha-ent'];
topServers = ['clarkeinc', 'b-and-a', '4sigma', 'megacorp', 'ecorp'];
script = 'base-target.script';
scriptRam = getScriptRam(script, 'home');
i = 0;

currentTopServer = topServers[i];
	
for (j = 1; j < 6; j++) {
	currentPurchasedServer = ('server-' + j);

	scp('base-target.script', 'home', currentPurchasedServer);
	killall(currentPurchasedServer);
	sleep(3000);

	totalRam = (getServerRam(currentPurchasedServer)[0]);
	usedRam = (getServerRam(currentPurchasedServer)[1]);
	maxThreads = (Math.floor((totalRam) / (scriptRam)));

	exec(script, currentPurchasedServer, maxThreads, currentTopServer);
	tprint(script + ' is now running on ' + currentPurchasedServer + ' with ' + currentTopServer + ' as its target.');
	tprint('Moving on to next server.');		
}

i = 1;
currentTopServer = topServers[i]; 

for (j = 6; j < 11; j++) {
	currentPurchasedServer = ('server-' + j);

	scp('base-target.script', 'home', currentPurchasedServer);
	killall(currentPurchasedServer);
	sleep(3000);

	totalRam = (getServerRam(currentPurchasedServer)[0]);
	usedRam = (getServerRam(currentPurchasedServer)[1]);
	maxThreads = (Math.floor((totalRam) / (scriptRam)));

	exec(script, currentPurchasedServer, maxThreads, currentTopServer);
	tprint(script + ' is now running on ' + currentPurchasedServer + ' with ' + currentTopServer + ' as its target.');
	tprint('Moving on to next server.');		
}

i = 2;
currentTopServer = topServers[i];

for (j = 11; j < 16; j++) {
	currentPurchasedServer = ('server-' + j);

	scp('base-target.script', 'home', currentPurchasedServer);
	killall(currentPurchasedServer);
	sleep(3000);

	totalRam = (getServerRam(currentPurchasedServer)[0]);
	usedRam = (getServerRam(currentPurchasedServer)[1]);
	maxThreads = (Math.floor((totalRam) / (scriptRam)));

	exec(script, currentPurchasedServer, maxThreads, currentTopServer);
	tprint(script + ' is now running on ' + currentPurchasedServer + ' with ' + currentTopServer + ' as its target.');
	tprint('Moving on to next server.');		
}

i = 3;
currentTopServer = topServers[i];

for (j = 16; j < 21; j++) {
	currentPurchasedServer = ('server-' + j);

	scp('base-target.script', 'home', currentPurchasedServer);
	killall(currentPurchasedServer);
	sleep(3000);

	totalRam = (getServerRam(currentPurchasedServer)[0]);
	usedRam = (getServerRam(currentPurchasedServer)[1]);
	maxThreads = (Math.floor((totalRam) / (scriptRam)));

	exec(script, currentPurchasedServer, maxThreads, currentTopServer);
	tprint(script + ' is now running on ' + currentPurchasedServer + ' with ' + currentTopServer + ' as its target.');
	tprint('Moving on to next server.');		
}

i = 4;
currentTopServer = topServers[i];

for (j = 21; j < 26; j++) {
	currentPurchasedServer = ('server-' + j);

	scp('base-target.script', 'home', currentPurchasedServer);
	killall(currentPurchasedServer);
	sleep(3000);

	totalRam = (getServerRam(currentPurchasedServer)[0]);
	usedRam = (getServerRam(currentPurchasedServer)[1]);
	maxThreads = (Math.floor((totalRam) / (scriptRam)));

	exec(script, currentPurchasedServer, maxThreads, currentTopServer);
	tprint(script + ' is now running on ' + currentPurchasedServer + ' with ' + currentTopServer + ' as its target.');
	tprint('Moving on to next server.');		
}