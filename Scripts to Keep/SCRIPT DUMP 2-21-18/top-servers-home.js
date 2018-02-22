// topServers = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'hong-fang-tea', 'harakiri-sushi'];
topServers = ['clarkeinc', 'b-and-a', '4sigma', 'megacorp', 'ecorp', 'omnitek', 'kuai-gong', 'blade', 'nwo'];
// topServers = ['the-hub', 'rho-construction', 'phantasy', 'omega-net'];
script = 'base-target.script';
scriptRam = getScriptRam(script, 'home');
maxHomeRam = getServerRam('home')[0];
usedHomeRam = getServerRam('home')[1];
totalHomeRam = maxHomeRam - usedHomeRam;
maxHomeThreads = (Math.floor((totalHomeRam) / (scriptRam)));
maxHomeThreadsPerServer = Math.floor(maxHomeThreads / topServers.length);
portBusters = [];

///////////////////////
// Find dem port bustas
///////////////////////

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

///////////////////
// Gain root access
///////////////////

function openSesame(targetServer) {
	//You already have root access
	if ((hasRootAccess(targetServer)) === true) {
		tprint('You already have root access on ' + targetServer + '.');
	} else {
		if ((portBusters.length) === 1) {
			brutessh(targetServer);
			tprint('Opened port with BruteSSH.');
		}

		if ((portBusters.length) === 2) {
			brutessh(targetServer);
			tprint('Opened port with BruteSSH.');
			ftpcrack(targetServer);
			tprint('Opened port with FTPCrack.');
		}

		if ((portBusters.length) === 3) {
			brutessh(targetServer);
			tprint('Opened port with BruteSSH.');
			ftpcrack(targetServer);
			tprint('Opened port with FTPCrack.');
			relaysmtp(targetServer);
			tprint('Opened port with relaySMTP.');
		}

		if ((portBusters.length) === 4) {
			brutessh(targetServer);
			tprint('Opened port with BruteSSH.');
			ftpcrack(targetServer);
			tprint('Opened port with FTPCrack.');
			relaysmtp(targetServer);
			tprint('Opened port with relaySMTP.');
			httpworm(targetServer);
			tprint('Opened port with HTTPWorm.');
		}

		if ((portBusters.length) === 5) {
			brutessh(targetServer);
			tprint('Opened port with BruteSSH.');
			ftpcrack(targetServer);
			tprint('Opened port with FTPCrack.');
			relaysmtp(targetServer);
			tprint('Opened port with relaySMTP.');
			httpworm(targetServer);
			tprint('Opened port with HTTPWorm.');
			sqlinject(targetServer);
			tprint('Opened port with SQLInject.');
		}

		nuke(targetServer);
		tprint('You now have root access to ' + targetServer + '.');
	}
}
	
/////////////////////////////////////////////////////////
// Function to print things in a nice way on the terminal
/////////////////////////////////////////////////////////
	
function text(statement) {
	tprint('-----------------------------------------------------------------');
	tprint(statement);
	tprint('-----------------------------------------------------------------');
}

//////////

for (i = 0; i < topServers.length; i++) {
	currentTopServer = topServers[i];
	
	openSesame(currentTopServer);
	
	exec(script, 'home', maxHomeThreadsPerServer, currentTopServer);
	text(currentTopServer + ' has now been targeted with ' + maxHomeThreadsPerServer + ' threads!');
}

tprint('--- DONE! ---');