// Change the desired starting script
script = 'base-target.script';

// Change to the desired reputation before restart
goalRep = 100000;

factionServer = args[0];
faction = args[1];
requiredHackingLevel = getServerRequiredHackingLevel(factionServer);
requiredPortBusters = getServerNumPortsRequired(factionServer);
userHackingLevel = getHackingLevel();
userMoney = getServerMoneyAvailable('home');
portBustersCost = 0;
currentFactionRep = 0;
portBusters = [];
neededPortBustersArray = [];

scriptRam = getScriptRam(script, 'home');
totalRam = (getServerRam('home')[0]);
usedRam = (getServerRam('home')[1]);
maxThreads = (Math.floor((totalRam) / (scriptRam)));

// Wait for starter script on home to die
sleep(1500);

function commas(x) {
  return x.toLocaleString();
}


// How many port busters do you already have?
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

ownedPortBusters = portBusters.length;
tprint('You own ' + ownedPortBusters + ' port busters.');
neededPortBusters = requiredPortBusters - ownedPortBusters;
tprint('You will need to buy ' + neededPortBusters + ' more port busters.');


// How many port busters are required to hack the server?
if (requiredPortBusters === 5) {
	if (neededPortBusters === 5) {
		portBusterCost = 287000000;
		neededPortBustersArray.push('BruteSSH.exe', 'FTPCrack.exe', 'relaySMTP.exe', 'HTTPWorm.exe', 'SQLInject.exe');
	}
	
	if (neededPortBusters === 4) {
		portBusterCost = 286500000;
		neededPortBustersArray.push('FTPCrack.exe', 'relaySMTP.exe', 'HTTPWorm.exe', 'SQLInject.exe');
	}
	
	if (neededPortBusters === 3) {
		portBusterCost = 285000000;
		neededPortBustersArray.push('relaySMTP.exe', 'HTTPWorm.exe', 'SQLInject.exe');		
	}
	
	if (neededPortBusters === 2) {
		portBusterCost = 280000000;
		neededPortBustersArray.push('HTTPWorm.exe', 'SQLInject.exe');		
	}
	
	if (neededPortBusters === 1) {
		portBusterCost = 250000000;
		neededPortBustersArray.push('SQLInject.exe');
	}
	
	if (neededPortBusters === 0) {
		portBusterCost = 0;
	}
	
	print('You will need $' + commas(portBusterCost) + ' to buy necessary port busters.');
}

// How many port busters do you still need to buy?
if (requiredPortBusters === 4) {
	if (neededPortBusters === 4) {
		portBusterCost = 37000000;
		neededPortBustersArray.push('BruteSSH.exe', 'FTPCrack.exe', 'relaySMTP.exe', 'HTTPWorm.exe');
	}
	
	if (neededPortBusters === 3) {
		portBusterCost = 36500000;
		neededPortBustersArray.push('FTPCrack.exe', 'relaySMTP.exe', 'HTTPWorm.exe');
	}
	
	if (neededPortBusters === 2) {
		portBusterCost = 35000000;
		neededPortBustersArray.push('relaySMTP.exe', 'HTTPWorm.exe');
	}
	
	if (neededPortBusters === 1) {
		portBusterCost = 30000000;
		neededPortBustersArray.push('BruteSSH.exe', 'FTPCrack.exe', 'relaySMTP.exe', 'HTTPWorm.exe', 'SQLInject.exe');
	}
	
	if (neededPortBusters === 0) {
		portBusterCost = 0;
	}
	
	print('You will need $' + commas(portBusterCost) + ' to buy necessary port busters.');
}

if (requiredPortBusters === 3) {
	if (neededPortBusters === 3) {
		portBusterCost = 7000000;
	}
	
	if (neededPortBusters === 2) {
		portBusterCost = 6500000;
	}
	
	if (neededPortBusters === 1) {
		portBusterCost = 5000000;
	}
	
	if (neededPortBusters === 0) {
		portBusterCost = 0;
	}
	
	print('You will need $' + commas(portBusterCost) + ' to buy necessary port busters.');
}

if (requiredPortBusters === 2) {
	if (neededPortBusters === 2) {
		portBusterCost = 2000000;
	}
	
	if (neededPortBusters === 1) {
		portBusterCost = 1500000;
	}
	
	if (neededPortBusters === 0) {
		portBusterCost = 0;
	}
	
	print('You will need $' + commas(portBusterCost) + ' to buy necessary port busters.');
}

if (requiredPortBusters === 1) {	
	if (neededPortBusters === 1) {
		portBusterCost = 500000;
	}
	
	if (neededPortBusters === 0) {
		portBusterCost = 0;
	}
	
	print('You will need $' + commas(portBusterCost) + ' to buy necessary port busters.');
}

// If you have as many port busters as you need
if (neededPortBusters === 0) {
	portBusterCost = 0;
	print('You do not need to buy any additional port busters to hack ' + factionServer + '.');
}

tprint('Running script to gain hacking experience and money...');
exec(script, 'home', maxThreads, 'foodnstuff');

if (userHackingLevel < requiredHackingLevel) {
	userHackingLevel = getHackingLevel();
	difference = requiredHackingLevel - userHackingLevel;
	
	tprint('You do not have a high enough hacking level to hack the server.');
	tprint('You need ' + commas(difference) + ' experience to be able to hack ' + factionServer + '.');
}

while (userMoney < (portBusterCost + 200000)) {
	userMoney = getServerMoneyAvailable('home');
	difference = portBusterCost - userMoney;
	
	print('Not enough money to buy port busters...');
	tprint('You need $' + commas(difference) + ' to buy enough portbusters.');
	sleep(30000);
}

purchaseTor();

if (requiredPortBusters === 5) {
	tprint('Purchasing necessary port busters...');
	purchaseProgram('BruteSSH.exe');
	tprint('Bought BruteSSH.exe');
	purchaseProgram('FTPCrack.exe');
	tprint('Bought FTPCrack.exe');
	purchaseProgram('relaySMTP.exe');
	tprint('Bought relaySMTP.exe');
	purchaseProgram('HTTPWorm.exe');
	tprint('Bought HTTPWorm.exe');
	purchaseProgram('SQLInject.exe');
	tprint('Bought SQLInject.exe');
	print('You now have the necessary port busters.');
}

if (requiredPortBusters === 4) {
	tprint('Purchasing necessary port busters...');
	purchaseProgram('BruteSSH.exe');
	tprint('Bought BruteSSH.exe');
	purchaseProgram('FTPCrack.exe');
	tprint('Bought FTPCrack.exe');
	purchaseProgram('relaySMTP.exe');
	tprint('Bought relaySMTP.exe');
	purchaseProgram('HTTPWorm.exe');
	tprint('Bought HTTPWorm.exe');
	print('You now have the necessary port busters.');
}

if (requiredPortBusters === 3) {
	tprint('Purchasing necessary port busters...');
	purchaseProgram('BruteSSH.exe');
	tprint('Bought BruteSSH.exe');
	purchaseProgram('FTPCrack.exe');
	tprint('Bought FTPCrack.exe');
	purchaseProgram('relaySMTP.exe');
	tprint('Bought relaySMTP.exe');
	print('You now have the necessary port busters.');
}

if (requiredPortBusters === 2) {
	tprint('Purchasing necessary port busters...');
	purchaseProgram('BruteSSH.exe');
	tprint('Bought BruteSSH.exe');
	purchaseProgram('FTPCrack.exe');
	tprint('Bought FTPCrack.exe');
	print('You now have the necessary port busters.');
}

if (requiredPortBusters === 1) {
	tprint('Purchasing necessary port busters...');
	purchaseProgram('BruteSSH.exe');
	tprint('Bought BruteSSH.exe');
	print('You now have the necessary port busters.');
}

userHackingLevel = getHackingLevel();

while (userHackingLevel < requiredHackingLevel) {
	print('You do not have enough hacking experience.');
	print('Sleeping for 30 seconds...');
	sleep(30000);
	userHackingLevel = getHackingLevel();
}

if ((prompt('You now have the requirements to hack ' + factionServer + '. You must now connect to the server, and hack it manually. Do you understand?')) === true) {
	tprint('Opening up the server...');
	
	if (requiredPortBusters === 5) {
		brutessh(factionServer);
		ftpcrack(factionServer);
		relaysmtp(factionServer);
		httpworm(factionServer);
		sqlinject(factionServer);
	}
	
	if (requiredPortBusters === 4) {
		brutessh(factionServer);
		ftpcrack(factionServer);
		relaysmtp(factionServer);
		httpworm(factionServer);
	}
	
	if (requiredPortBusters === 3) {
		brutessh(factionServer);
		ftpcrack(factionServer);
		relaysmtp(factionServer);
	}
	
	if (requiredPortBusters === 2) {
		brutessh(factionServer);
		ftpcrack(factionServer);
	}
	
	if (requiredPortBusters === 1) {
		brutessh(factionServer);
	}
	
	nuke(factionServer);
	
	if (hasRootAccess(factionServer) === true) {
		tprint('You now have root access to ' + factionServer + '.');
	} else {
		tprint('There was an error, and you do not have root access to ' + factionServer + '.');
	}
		
	tprint('Finding location of ' + factionServer + '...');
	killall('home');
	sleep(5000);
	exec('tracert.script', 'home', 1, factionServer);
} else {
	tprint('Bruh. You best understand you need to hack dis shit manually...');
}

sleep(45000)

if ((prompt('Are you ready to begin earning faction reputation?')) === true) {
	tprint('Killing all scripts on home machine...');
	killall('home');
	sleep(4000);
	tprint('Executing all-server.script ...');
	exec('all-server.script', 'home', 1, script, 'phantasy');
} else {
	tprint('Sleeping for another 30 seconds...');
	sleep(30000);
}

tprint('Waiting for you to set off on main servers...');
sleep(60000);

if ((prompt('Have you finished with the main servers?')) === true) {
	tprint('Great. Beginning to gain faction reputation...');
	sleep(3000);
} else {
	tprint('Sleeping for another 30 seconds...');
	sleep(30000);
}

tprint('Joining ' + faction + '...');
joinFaction(faction);
tprint('Successfully joined ' + faction + '.');
tprint('Beginning faction work...');


while (currentFactionRep < goalRep) {
	print('You currently have ' + commas(currentFactionRep) + ' reputation for ' + faction + '.');
	workForFaction(faction, 'hacking');
	print('Sleeping for 30 seconds...');
	sleep(30000);
	commitCrime('homicide');
	sleep(5000);
	currentFactionRep = getFactionRep(faction);
}

tprint('You have reached your goal of ' + commas(goalRep) + ' reputation for ' + faction + '.');
tprint('---DONE!---');