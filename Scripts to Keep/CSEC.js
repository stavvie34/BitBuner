easyServers = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'hong-fang-tea', 'harakiri-sushi'];

stats = getStats();
csecRep = 0;

neuroTrainerRepCost = 1000;
neuroTrainerCashCost = 4000000;
seiRepCost = 2000;
seiCashCost = 7500000;
bitWireRepCost = 3750;
bitWireCashCost = 10000000;
cspRepCost = 10000;
cspCashCost = 70000000;


scriptRam = getScriptRam('base-target.script', 'home');
totalRam = (getServerRam('home')[0]);
usedRam = (getServerRam('home')[1]);
maxThreads = (Math.floor((totalRam - usedRam) / (scriptRam)));


// Copy script and gain root access on all easy servers
print('Copying script and gaining root access to servers...');
for (i = 0; i < easyServers.length; i = i + 1) {
	currentServer = easyServers[i];
	
	scp('base-target.script', 'home', currentServer);
	nuke(currentServer);	
}
print('Sucessfully copied script and gained root access to servers!');

// Run the script on your home machine
print('Executing the script on home machine...');
exec('base-target.script', 'home', maxThreads, 'foodnstuff');
print('Successfully executed script on home machine!');



// Get hacking high enough to run script on sigma-cosmetics
print('Getting hacking level high enough to run script on sigma-cosmetics...');
while (stats.hacking < 5) {
	universityCourse('Rothman University', 'Study Computer Science');
	sleep(5000);
	stats = getStats();
}
print('You now have the hacking level required to run the script on sigma-cosmetics!');

// Run script on sigma-cosmetics
print('Executing the script on sigma-cosmetics...');
exec('base-target.script', 'sigma-cosmetics', 6, 'foodnstuff');
print('Sucessfully executed script on sigma-cosmetics!');



// Get hacking high enough to run script on joesguns
print('Getting hacking level high enough to run script on joesguns...');
while (stats.hacking < 10) {
	universityCourse('Rothman University', 'Study Computer Science');
	sleep(5000);
	stats = getStats();
}
print('You now have the hacking level required to run the script on joesguns!');

// Run script on joesguns
print('Executing the script on joesguns...');
exec('base-target.script', 'joesguns', 6, 'foodnstuff');
print('Sucessfully executed script on joesguns!');


// Get hacking high enough to run script on hong-fang-tea
while (stats.hacking < 30) {
	universityCourse('Rothman University', 'Study Computer Science');
	sleep(5000);
	stats = getStats();
}

// Run script on hong-fang-tea
exec('base-target.script', 'hong-fang-tea', 6, 'foodnstuff');



// Get hacking high enough to run script on harakiri-sushi
while (stats.hacking < 40) {
	universityCourse('Rothman University', 'Study Computer Science');
	sleep(5000);
	stats = getStats();
}

// Run script on harakiri-sushi
exec('base-target.script', 'harakiri-sushi', 6, 'foodnstuff');



// Get hacking high enough to create BruteSSH.exe
while (stats.hacking < 50) {
	universityCourse('Rothman University', 'Study Computer Science');
	sleep(5000);
	stats = getStats();
}

// Start creating BruteSSH.exe
createProgram('BruteSSH.exe');

// Wait until you are done creating BruteSSH.exe
while ((isBusy()) === true) {
	sleep(10000);
}



// Get hacking high enough to hack CSEC
while (stats.hacking < 58) {
	universityCourse('Rothman University', 'Study Computer Science');
	sleep(5000);
	stats = getStats();
}

// Open port and nuke CSEC
brutessh('CSEC');
nuke('CSEC');

// Run tracert.script to show you what servers you need to connect to in order to get to CSEC
scp('tracert.script', 'home', 'sigma-cosmetics');
killall('sigma-cosmetics');
sleep(5000);
exec('tracert.script', 'sigma-cosmetics', 1, 'CSEC');

// Give you a chance to manually hack CSEC. 
if ((prompt('You must now manually hack CSEC. You will have 1 minute to manually hack the server. Select either option to continue.')) === true) {
	print('60 seconds remaining...');
	sleep(10000);
	print('50 seconds remaining...');
	sleep(10000);
	print('40 seconds remaining...');
	sleep(10000);
	print('30 seconds remaining...');
	sleep(10000);
	print('20 seconds remaining...');
	sleep(10000);
	print('10 seconds remaining...');
	sleep(10000);
} else {
	print('60 seconds remaining...');
	sleep(10000);
	print('50 seconds remaining...');
	sleep(10000);
	print('40 seconds remaining...');
	sleep(10000);
	print('30 seconds remaining...');
	sleep(10000);
	print('20 seconds remaining...');
	sleep(10000);
	print('10 seconds remaining...');
	sleep(10000);
}

// Join CyberSec
joinFaction('CyberSec');
csecRep = getFactionRep('CyberSec');

while (csecRep < seiRepCost) {
	workForFaction('CyberSec', 'hacking');
	sleep(10000);
	csecRep = getFactionRep('CyberSec');
}

print('You now have enough faction reputation to purchase Synaptic Enhancement Implant.');

cash = getServerMoneyAvailable('home');

while (cash < seiCashCost) {
	print('Not enough money to buy Synaptic Enhancement Implant.');
	print('Sleeping for 30 seconds...');
	sleep(30000);
	cash = getServerMoneyAvailable('home');
}

if ((prompt('You now have joined CyberSec and you are gaining rep with them. Select either option to end this script. You will continue to carry out hacking contracts for CyberSec')) === true) {
} else {
}