faction = args[0];
repMax = args[1];
factionRep = 0;


while (factionRep < repMax) {
	workForFaction(faction, 'hacking');
	sleep(30000);
	factionRep = getFactionRep(faction);
	print('You currently have ' + factionRep + ' reputation with ' + faction + '.');
}

if ((prompt('You now have ' + repMax + ' reputation with ' + faction + '. Select either option to kill script.')) === true) {
	
} else {
	
}