/*
faction1 = 'Tian Di Hui';
faction1Rep = 5000;
userFactionRep1 = 0;

faction2 = 'NiteSec';
faction2Rep = 6250;
userFactionRep2 = 0;

faction3 = 'New Tokyo';
faction3Rep = 6250;
userFactionRep3 = 0;

faction4 = 'Ishima';
faction4Rep = 7500;
userFactionRep4 = 0;

faction5 = 'Volhaven';
faction5Rep = 15000;
userFactionRep5 = 0;

faction6 = 'Chongqing';
faction6Rep = 37500;
userFactionRep6 = 0;

faction7 = 'Sector-12';
faction7Rep = 50000;
userFactionRep7 = 0;
*/

factions = ['Tian Di Hui', 'NiteSec', 'New Tokyo', 'Ishima', 'Volhaven', 'Chongqing', 'Sector-12'];
factionRep = [5000, 6250, 6250, 7500, 15000, 37500, 50000];
userRep = [0];

for (i = 0; i < factions.length; i = i + 1) {
	currentFaction = factions[i];
	currentRepGoal = factionRep[i];
	
	while (userRep[0] < currentRepGoal) {
		workForFaction(currentFaction, 'hacking');
		sleep(30000);
		currentFactionRep = getFactionRep(currentFaction);
		userRep.unshift(currentFactionRep);
		userRepLeft = currentRepGoal - userRep[0];
		print('You currently have ' + userRep[0] + ' reputation with ' + currentFaction + '.');
		print('You still have ' + userRepLeft + ' reputation points to get to your goal of ' + currentRepGoal + '.');
	}
	
	userRep.unshift(0);
}

rates = [];

// Find optimal servers
for (i = 0; i < factions.length; i = i + 1) {
	currentFaction = factions[i];
	repStart = getFactionRep(currentFaction);
	workForFaction(currentFaction, 'hacking');
	sleep(10000);
	repEnd = getFactionRep(currentFaction);
	repGain = repEnd - repStart;
	repRate = repGain / 10;
	rates.push(repRate);
}

rateTianDiHui = rates[0];
rateNiteSec = rates[1];
rateNewTokyo = rates[2];
rateIshima = rates[3];
rateVolhaven = rates[4];
rateChongqing = rates[5];
rateSector12 = rates[6];



