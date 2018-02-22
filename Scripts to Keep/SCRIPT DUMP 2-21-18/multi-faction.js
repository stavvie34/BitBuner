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