servers = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'crush-fitness', 'johnson-ortho', 'the-hub', 'comptek', 'netlink', 'rothman-uni', 'catalyst', 'summit-uni', 'rho-construction', 'millenium-fitness', 'aevum-police', 'alpha-ent', 'syscore', 'lexo-corp', 'snap-fitness', 'global-pharm', 'applied-energetics', 'unitalife', 'nova-med', 'zb-def', 'zb-institute', 'vitalife', 'titan-labs', 'solaris', 'microdyne', 'helios', 'deltaone', 'icarus', 'omnia', 'defcomm', 'galactic-cyber', 'infocomm', 'taiyang-digital', 'stormtech', 'aerocorp', 'clarkeinc', 'omnitek', '4sigma', 'blade', 'b-and-a', 'ecorp', 'fulcrumtech', 'megacorp', 'kuai-gong', 'fulcrumassets', 'powerhouse-fitness'];

purchasedServers = [];

script = args[0];
target = args[1];
scriptRam = getScriptRam('base-target.script', 'home');
allServerRam = getScriptRam('all-server.script', 'home');
portBusters = [];
killCurrentScripts = [];
userStartMoney = getServerMoneyAvailable('home');


numPortsRequiredTarget = (getServerNumPortsRequired(target));
hackingLevelRequiredTarget = (getServerRequiredHackingLevel(target));
userHackingLevel = (getHackingLevel());


///////////////
// Functions //
///////////////

function findPortBusters() {
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
}


function openSesame(target) {
	if ((portBusters.length) === 1) {
		brutessh(target);
		tprint('Opened port with BruteSSH.');
	}

	if ((portBusters.length) === 2) {
		brutessh(target);
		tprint('Opened port with BruteSSH.');
		ftpcrack(target);
		tprint('Opened port with FTPCrack.');
	}

	if ((portBusters.length) === 3) {
		brutessh(target);
		tprint('Opened port with BruteSSH.');
		ftpcrack(target);
		tprint('Opened port with FTPCrack.');
		relaysmtp(target);
		tprint('Opened port with relaySMTP.');
	}

	if ((portBusters.length) === 4) {
		brutessh(target);
		tprint('Opened port with BruteSSH.');
		ftpcrack(target);
		tprint('Opened port with FTPCrack.');
		relaysmtp(target);
		tprint('Opened port with relaySMTP.');
		httpworm(target);
		tprint('Opened port with HTTPWorm.');
	}

	if ((portBusters.length) === 5) {
		brutessh(target);
		tprint('Opened port with BruteSSH.');
		ftpcrack(target);
		tprint('Opened port with FTPCrack.');
		relaysmtp(target);
		tprint('Opened port with relaySMTP.');
		httpworm(target);
		tprint('Opened port with HTTPWorm.');
		sqlinject(target);
		tprint('Opened port with SQLInject.');
	}

	nuke(target);
}


//If you don't have a high enough hacking level
if (userHackingLevel < hackingLevelRequiredTarget) {
	tprint('You do not have a high enough hacking level for ' + target + '.');
} else {
	
	findPortBusters();	

	//You already have root access
	if ((hasRootAccess(target)) === true) {
		tprint('You already have root access on ' + target + '.');
	} else {
		//You don't have enough port busters
		if ((portBusters.length) < numPortsRequiredTarget) {
			tprint('You do not own enough port busters to gain root access to ' + target + '.');
			tprint('Moving on to next server.');
		} else {
			//Opening ports
			openSesame(target);
			tprint('You now have root access to ' + target + '.');
		}
	}
}

totalRam = (getServerRam('home')[0]);
usedRam = (getServerRam('home')[1]);
maxThreads = (Math.floor((totalRam - usedRam) / (scriptRam)));

exec(script, 'home', maxThreads, target);
tprint('Script is now running on your home machine.');

tprint('////////////////////////////////////////');
tprint('---------- Working on Servers ----------');
tprint('////////////////////////////////////////');


for (i = 0; i < servers.length; i = i + 1) {
	currentServer = servers[i];
	numPortsRequired = (getServerNumPortsRequired(currentServer));
	hackingLevelRequired = (getServerRequiredHackingLevel(currentServer));
	userHackingLevel = (getHackingLevel());

	tprint('//////////////////////////////////////////////////////');
	tprint('---------- Working on ' + currentServer + ' ----------');
	tprint('//////////////////////////////////////////////////////');


	if (userHackingLevel < hackingLevelRequired) {
		tprint('You do not have a high enough hacking level for ' + currentServer + '.');
		tprint('Moving on to next server.');
	} else {

		//REQUIRES THAT YOU HAVE EACH PORT BUSTER IN ORDER AND DIDN'T SKIP IN GETTING ONE

		//You already have root access
		if ((hasRootAccess(currentServer)) === true) {
			tprint('You already have root access on ' + currentServer + '.');
		} else {
			//You don't have enough port busters
			if ((portBusters.length) < numPortsRequired) {
				tprint('You do not own enough port busters to gain root access to ' + currentServer + '.');
				tprint('Moving on to next server.');
			} else {
				//Opening ports
				openSesame(target);
				tprint('You now have root access to ' + currentServer + '.');
			}
		}

		totalRam = (getServerRam(currentServer)[0]);
		usedRam = (getServerRam(currentServer)[1]);
		maxThreads = (Math.floor((totalRam) / (scriptRam)));

		if ((currentServer == 'foodnstuff') === true) {
			tprint('Ignoring foodnstuff...');
		} else {
			if (usedRam > 0) {
				tprint('Killing all scripts on ' + currentServer + '.');
				killall(currentServer);
				sleep(5000);
			}
		}


		if (scriptRam > totalRam) {
			tprint('There is not enough RAM on ' + currentServer + ' to run the script.');
			tprint('Moving on to next server.');
		} else {
			scp(script, currentServer);
			exec(script, currentServer, maxThreads, target);
			if (isRunning(script, currentServer, target) === true) {
				tprint(script + ' is now running on ' + currentServer + '.');
			} else {
			    tprint('The script is not running.');
			}
		}
	}
}



tprint('///////////////////////////////////////////////////////////////////////');
tprint('---------- Successfully ran base script on all servers ----------');
tprint('///////////////////////////////////////////////////////////////////////');
tprint(' ');


tprint('///////////////////////////////////');
tprint('---------- *** DONE! *** ----------');
tprint('///////////////////////////////////');