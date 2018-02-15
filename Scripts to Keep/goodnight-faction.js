currentNiteSecRep = 0;
currentBlackHandRep = 0;
currentBitRunnersRep = 0;

function commas(x) {
	return x.toLocaleString();
}

while (currentNiteSecRep < 112500) {
	difference = 112500 - currentNiteSecRep;
	workForFaction('NiteSec', 'hacking');
	sleep(15000);
	print('You still need ' + commas(difference) + ' reputation.');
	
	currentNiteSecRep = getFactionRep('NiteSec');
}

print('You have enough reputation with NiteSec. Moving on...');

while (currentBlackHandRep < 125000) {
	difference = 125000 - currentBlackHandRep;
	workForFaction('The Black Hand', 'hacking');
	sleep(15000);
	print('You still need ' + commas(difference) + ' reputation.');
	
	currentBlackHandRep = getFactionRep('The Black Hand');
}

print('You have enough reputation with NiteSec. Moving on...');

while (currentBitRunnersRep < 1000000) {
	difference = 1000000 - currentBitRunnersRep;
	workForFaction('BitRunners', 'hacking');
	sleep(15000);
	print('You still need ' + commas(difference) + ' reputation.');
	
	currentBitRunnersRep = getFactionRep('BitRunners');
}

print('You have enough reputation with BitRunners...');
if ((prompt('You probably woke up by now. You did it!')) === true) {
	
}