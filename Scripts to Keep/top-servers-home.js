topServers = ['clarkeinc', 'b-and-a', '4sigma', 'megacorp', 'ecorp', 'omnitek', 'kuai-gong', 'blade'];
script = 'base-target.script';
scriptRam = getScriptRam(script, 'home');
maxHomeRam = getServerRam('home')[0];
usedHomeRam = getServerRam('home')[1];
totalHomeRam = maxHomeRam - usedHomeRam;
maxHomeThreads = (Math.floor((totalHomeRam) / (scriptRam)));
maxHomeThreadsPerServer = Math.floor(maxHomeThreads / topServers.length);

//////////

function text(statement) {
	tprint('-----------------------------------------------------------------');
	tprint(statement);
	tprint('-----------------------------------------------------------------');
}

//////////

for (i = 0; i < topServers.length; i++) {
	currentTopServer = topServers[i];
	
	exec(script, 'home', maxHomeThreadsPerServer, currentTopServer);
	text(currentTopServer + ' has now been targeted with ' + maxHomeThreadsPerServer + ' threads!');
}

tprint('--- DONE! ---');