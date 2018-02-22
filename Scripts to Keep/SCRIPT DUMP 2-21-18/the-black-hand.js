easyServers = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'hong-fang-tea', 'harakiri-sushi'];

stats = getStats();
currentBlackHandRep = 0;

/*
neuroTrainerRepCost = 1000;
neuroTrainerCashCost = 4000000;
seiRepCost = 2000;
seiCashCost = 7500000;
bitWireRepCost = 3750;
bitWireCashCost = 10000000;
cspRepCost = 10000;
cspCashCost = 70000000;
*/

scriptRam = getScriptRam('base-target.script', 'home');
totalRam = (getServerRam('home')[0]);
usedRam = (getServerRam('home')[1]);
maxThreads = (Math.floor((totalRam - usedRam) / (scriptRam)));


// Copy script and gain root access on all easy servers
print('----------------------------------------------------');
print('Copying script and gaining root access to servers...');
print('----------------------------------------------------');
for (i = 0; i < easyServers.length; i = i + 1) {
	currentServer = easyServers[i];
	
	scp('base-target.script', 'home', currentServer);
	nuke(currentServer);	
}
print('------------------------------------------------------------');
print('Sucessfully copied script and gained root access to servers!');
print('------------------------------------------------------------');

// Run the script on your home machine
print('---------------------------------------');
print('Executing the script on home machine...');
print('---------------------------------------');
exec('base-target.script', 'home', maxThreads, 'foodnstuff');
print('---------------------------------------------');
print('Successfully executed script on home machine!');
print('---------------------------------------------');



// Get hacking high enough to run script on sigma-cosmetics
print('---------------------------------------------------------------------');
print('Getting hacking level high enough to run script on sigma-cosmetics...');
print('---------------------------------------------------------------------');
while (stats.hacking < 5) {
	universityCourse('Rothman University', 'Algorithms');
	sleep(5000);
	stats = getStats();
}
print('-----------------------------------------------------------------------------');
print('You now have the hacking level required to run the script on sigma-cosmetics!');
print('-----------------------------------------------------------------------------');

// Run script on sigma-cosmetics
print('------------------------------------------');
print('Executing the script on sigma-cosmetics...');
print('------------------------------------------');
exec('base-target.script', 'sigma-cosmetics', 6, 'foodnstuff');
print('-----------------------------------------------');
print('Sucessfully executed script on sigma-cosmetics!');
print('-----------------------------------------------');



// Get hacking high enough to run script on joesguns
print('--------------------------------------------------------------');
print('Getting hacking level high enough to run script on joesguns...');
print('--------------------------------------------------------------');
while (stats.hacking < 10) {
	universityCourse('Rothman University', 'Algorithms');
	sleep(5000);
	stats = getStats();
}
print('----------------------------------------------------------------------');
print('You now have the hacking level required to run the script on joesguns!');
print('----------------------------------------------------------------------');

// Run script on joesguns
print('-----------------------------------');
print('Executing the script on joesguns...');
print('-----------------------------------');
exec('base-target.script', 'joesguns', 6, 'foodnstuff');
print('----------------------------------------');
print('Sucessfully executed script on joesguns!');
print('----------------------------------------');


// Get hacking high enough to run script on hong-fang-tea
print('-------------------------------------------------------------------');
print('Getting hacking level high enough to run script on hong-fang-tea...');
print('-------------------------------------------------------------------');
while (stats.hacking < 30) {
	universityCourse('Rothman University', 'Algorithms');
	sleep(5000);
	stats = getStats();
}
print('---------------------------------------------------------------------------');
print('You now have the hacking level required to run the script on hong-fang-tea!');
print('---------------------------------------------------------------------------');

// Run script on hong-fang-tea
print('----------------------------------------');
print('Executing the script on hong-fang-tea...');
print('----------------------------------------');
exec('base-target.script', 'hong-fang-tea', 6, 'foodnstuff');
print('---------------------------------------------');
print('Sucessfully executed script on hong-fang-tea!');
print('---------------------------------------------');



// Get hacking high enough to run script on harakiri-sushi
print('--------------------------------------------------------------------');
print('Getting hacking level high enough to run script on harakiri-sushi...');
print('--------------------------------------------------------------------');
while (stats.hacking < 40) {
	universityCourse('Rothman University', 'Algorithms');
	sleep(5000);
	stats = getStats();
}
print('----------------------------------------------------------------------------');
print('You now have the hacking level required to run the script on harakiri-sushi!');
print('----------------------------------------------------------------------------');

// Run script on harakiri-sushi
print('-----------------------------------------');
print('Executing the script on harakiri-sushi...');
print('-----------------------------------------');
exec('base-target.script', 'harakiri-sushi', 6, 'foodnstuff');
print('----------------------------------------------');
print('Sucessfully executed script on harakiri-sushi!');
print('----------------------------------------------');




// Get hacking high enough to create BruteSSH.exe
print('-----------------------------------------------------------');
print('Getting hacking level high enough to create BruteSSH.exe...');
print('-----------------------------------------------------------');
while (stats.hacking < 50) {
	universityCourse('Rothman University', 'Algorithms');
	sleep(5000);
	stats = getStats();
}
print('---------------------------------------------------------------');
print('You now have the hacking level required to create BruteSSH.exe!');
print('---------------------------------------------------------------');

// Start creating BruteSSH.exe
print('------------------------');
print('Creating BruteSSH.exe...');
print('------------------------');
createProgram('BruteSSH.exe');

// Wait until you are done creating BruteSSH.exe
while ((isBusy()) === true) {
	sleep(10000);
}
print('---------------------------------');
print('Sucessfully created BruteSSH.exe!');
print('---------------------------------');



// Get hacking high enough to hack iron-gym
print('--------------------------------------------------------------');
print('Getting hacking level high enough to run script on iron-gym...');
print('--------------------------------------------------------------');
while (stats.hacking < 100) {
	universityCourse('Rothman University', 'Algorithms');
	sleep(5000);
	stats = getStats();
}
print('----------------------------------------------------------------------');
print('You now have the hacking level required to run the script on iron-gym!');
print('----------------------------------------------------------------------');

// Stop spending money on hacking level increase
commitCrime('homicide');

// Execute script on iron-gym
print('-----------------------------------');
print('Executing the script on iron-gym...');
print('-----------------------------------');
scp('base-target.script', 'home', 'iron-gym');
// Open port and nuke iron-gym
brutessh('iron-gym');
nuke('iron-gym');
exec('base-target.script', 'iron-gym', 13, 'foodnstuff');
print('----------------------------------------');
print('Sucessfully executed script on iron-gym!');
print('----------------------------------------');

// Changes target server to iron-gym
print('-------------------------------------');
print('Changing target server to iron-gym...');
print('-------------------------------------');
kill('base-target.script', 'home', 'foodnstuff');
sleep(6000);
print('---------------------------------------------------');
print('Executing all-server-auto.script on home machine...');
print('---------------------------------------------------');
exec('all-server-auto.script', 'home', 1, 'base-target.script', 'iron-gym');
print('--------------------------------------------');
print('Sucessfully executed script on home-machine!');
print('--------------------------------------------');


// Work for money
print('-------------------------');
print('Applying with Megacorp...');
print('-------------------------');
applyToCompany('MegaCorp', 'software');
print('-------------------------------------------------');
print('Successfully got a job with MegaCorp in Software!');
print('-------------------------------------------------');
print('-----------------------');
print('Working for Megacorp...');
print('-----------------------');

// Wait until enough money to buy FTPCrack.exe
print('---------------------------------------------------------------------------------');
print('Waiting until you have enough money to purchase FTPCrack.exe... and relaySMTP.exe');
print('---------------------------------------------------------------------------------');

cash = 0;

while (cash < 6700000) {
	workForCompany();
	sleep(30000);
	cash = getServerMoneyAvailable('home');
}
print('-----------------------------------------------------------------');
print('You have enough money to purchase FTPCrack.exe and relaySMTP.exe!');
print('-----------------------------------------------------------------');
commitCrime('homicide');

purchaseTor();
purchaseProgram('ftpcrack.exe');
purchaseProgram('relaysmtp.exe');
print('-----------------------------------------------------');
print('Sucessfully purchased FTPCrack.exe and relaySMTP.exe!');
print('-----------------------------------------------------');
kill('base-target.script', 'home', 'iron-gym');
sleep(6000);
print('---------------------------------------------------');
print('Executing all-server-auto.script on home machine...');
print('---------------------------------------------------');
exec('all-server-auto.script', 'home', 1, 'base-target.script', 'phantasy');
print('--------------------------------------------');
print('Sucessfully executed script on home-machine!');
print('--------------------------------------------');


print('------------------------------------------------------');
print('Getting hacking level high enough to hack I.I.I.I. ...');
print('------------------------------------------------------');
while (stats.hacking < 348) {
	sleep(30000);
	stats = getStats();
}
print('----------------------------------------------------------');
print('You now have the hacking level required to hack I.I.I.I. !');
print('----------------------------------------------------------');

// Waiting for all-server script to finish targeting phantasy
print('-------------------------------------------------------------');
print('Waiting for all-server script to finish targeting phantasy...');
print('-------------------------------------------------------------');
while ((scriptRunning('all-server-auto.script', 'home')) === true) {
	sleep(15000);
}
print('-----------------------------------');
print('Servers are now targeting phantasy!');
print('-----------------------------------');

// Run tracert.script to show you what servers you need to connect to in order to get to I.I.I.I
scp('tracert.script', 'home', 'sigma-cosmetics');
killall('sigma-cosmetics');
sleep(10000);
exec('tracert.script', 'sigma-cosmetics', 1, 'I.I.I.I');
brutessh('I.I.I.I');
ftpcrack('I.I.I.I');
relaysmtp('I.I.I.I');
nuke('I.I.I.I');

// Give you a chance to manually hack The Black Hand. 
if ((prompt('You must now manually hack I.I.I.I. You will have 1 minute to manually hack the server. Select either option to continue.')) === true) {
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

// Join The Black Hand
joinFaction('The Black Hand');
currentBlackHandRep = getFactionRep('The Black Hand');

print('---------------------------------------------------------------');
print('Working until you have enough reputation with The Black Hand...');
print('---------------------------------------------------------------');
while (currentBlackHandRep < 10000) {
	workForFaction('The Black Hand', 'hacking');
	sleep(30000);
	currentBlackHandRep = getFactionRep('The Black Hand');
}

if ((prompt('You should think about resetting and running this again...')) === true) {
	
} else {
	
}

tprint('--- DONE! ---');