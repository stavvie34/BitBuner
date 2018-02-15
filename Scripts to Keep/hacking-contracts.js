// Change the desired starting script
script = 'base-target.script';

// Change to the desired reputation before restart
goalRep = 100000

faction = args[0];
requiredHackingLevel = getServerRequiredHackingLevel(faction);
requiredPortBusters = getNumPortsRequired(faction);
userHackingLevel = getHackingLevel();
userMoney = getServerMoneyAvailable('home');
portBustersCost = 0;
currentFactionRep = 0;

scriptRam = getScriptRam(script, 'home');
totalRam = (getServerRam('home')[0]);
usedRam = (getServerRam('home')[1]);
maxThreads = (Math.floor((totalRam) / (scriptRam)));

// Wait for starter script on home to die
sleep(1500);



function commas(x) {
  return x.toLocaleString();
}

if (requiredPortBusters === 5) {
	portBusterCost = 287000000;
	print('You will need $' + commas(portBusterCost) + ' to buy necessary port busters.');
}

if (requiredPortBusters === 4) {
	portBusterCost = 37000000;
	print('You will need $' + commas(portBusterCost) + ' to buy necessary port busters.');
}

if (requiredPortBusters === 3) {
	portBusterCost = 7000000;
	print('You will need $' + commas(portBusterCost) + ' to buy necessary port busters.');
}

if (requiredPortBusters === 2) {
	portBusterCost === 2000000;
	print('You will need $' + commas(portBusterCost) + ' to buy necessary port busters.');
}

if (requiredPortBusters === 1) {
	portBusterCost === 500000);
	print('You will need $' + commas(portBusterCost) + ' to buy necessary port busters.');
}

if (userHackingLevel < requiredHackingLevel) {
	tprint('You do not have a high enough hacking level to hack the server.');
	tprint('Running script to gain hacking experience...');
	exec(script, 'home', maxThreads, 'foodnstuff');
}

while (userMoney < portBusterCost) {
	userMoney = getServerMoneyAvailable('home');
	difference = portBusterCost - userMoney;
	
	print('Not enough money to buy port busters...');
	tprint('You need $' + commas(difference); + ' to buy enough portbusters.');
	sleep(30000);
}

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

while (userHackingLevel < requiredHackingLevel) {
	print('You do not have enough hacking experience.');
	print('Sleeping for 30 seconds...');
	sleep(30000);
}

if ((prompt('You now have the requirements to hack ' + faction + '. You must now connect to the server, and hack it manually. Do you understand?')) === true) {
	tprint('Opening up the server...');
	
	if (requiredPortBusters === 5) {
		brutessh(faction);
		ftpcrack(faction);
		relaysmtp(faction);
		httpworm(faction);
		sqlinject(faction);
	}
	
	if (requiredPortBusters === 4) {
		brutessh(faction);
		ftpcrack(faction);
		relaysmtp(faction);
		httpworm(faction);
	}
	
	if (requiredPortBusters === 3) {
		brutessh(faction);
		ftpcrack(faction);
		relaysmtp(faction);
	}
	
	if (requiredPortBusters === 2) {
		brutessh(faction);
		ftpcrack(faction);
	}
	
	if (requiredPortBusters === 1) {
		brutessh(faction);
	}
	
	nuke(faction);
	
	if (hasRootAccess(faction) === true) {
		tprint('You now have root access to ' + faction + '.');
	} else {
		tprint('There was an error, and you do not have root access to ' + faction + '.');
	}
		
	tprint('Finding location of ' + faction + '...');
	killall('home');
	sleep(5000);
	exec('tracert.script', 'home', 1, faction);
} else {
	tprint('Bruh. You best understand you need to hack dis shit manually...');
}

sleep(30000)

if ((prompt('Are you ready to begin earning faction reputation?')) === true) {
	tprint('Killing all scripts on home machine...');
	killall('home');
	sleep(4000);
	tprint('Executing all-server.script ...');
	exec('all-server.script', 'home', 1, script, phantasy);
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