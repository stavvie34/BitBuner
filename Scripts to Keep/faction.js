// Check which factions you have invitations from and stores them in an array
factionInvitations = getFactionInvitations();
// Stores all owned augmentations in an array
ownedAugmentations = getOwnedAugmentations();
factionAugmentations = [];
factions = [];
knownFactions = ["Sector-12", "Aevum", "Tian Di Hui", "Chongqing", "New Tokyo", "Ishima", "Volhaven", "CyberSec", "NiteSec", "The Black Hand", "BitRunners", "Fulcrum Secret Technologies", "Bachman & Associates", "MegaCorp", "KuaiGong International", "Clarke Incorporated", "Blade Industries", "Four Sigma", "ECorp", "OmniTek Incorporated", "Netburners", "Slum Snakes", "Daedalus", "Tetrads", "Illuminati", "The Covenant", "NWO"];

/*
// Accepts each invitation, joins the faction, and pushes it to a faction array
for (i = 0; i < factionInvitations.length; i = i + 1) {
	currentFaction = factionInvitations[i];
	
	tprint('Joining ' + currentFaction + '...');
	joinFaction(currentFaction);
	factions.push(currentFaction);
	tprint('Sucessfully joined ' + currentFaction + '.');
}
*/

// If you are in that faction, adds it to an array
for (i = 0; i < knownFactions.length; i = i + 1) {
	currentFaction = knownFactions[i];
	tprint('------------------------------------------------------------');

	if (workForFaction(currentFaction, 'hacking') || workForFaction(currentFaction, 'fieldwork')) {
		tprint('Adding ' + currentFaction + ' to list of factions you belong to.');
		factions.push(currentFaction);
	} else {
		print('You do not belong to ' + currentFaction + '.');
	}
}


// Checks what augmentation each faction offers. Pushes that to an array
for (i = 0; i < factions.length; i = i + 1) {
	currentFaction = factions[i];
	tprint('------------------------------------------------------------');

	tprint('Finding augmentations on ' + currentFaction + '...');
	factionAugmentations.push(getAugmentationsFromFaction(currentFaction));
}










    //Check if your in a faction to get rep from 
    if(currentfactions.length>0){

        // work for faction
        for (i=0;i<currentfactions.length;i++){
            work(currentfactions[i]);
        }
        rep += 10000;
    }