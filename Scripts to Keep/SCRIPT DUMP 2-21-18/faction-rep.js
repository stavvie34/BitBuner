factionOne = args[0];
factionOneGoalRep = args[1];
factionTwo = args[2];
factionTwoGoalRep = args[3];

numberOfFactions = 0;

currentFactionOneRep = 0;
currentFactionTwoRep = 0;

if (factionOne === 'TheBlackHand') {
    factionOne = 'The Black Hand';
}

if (factionTwo === 'TheBlackHand') {
    factionTwo = 'The Black Hand';
}


//////////

function factionGrind(faction, repGoal) {
	currentFactionRep = 0;
	
	while (currentFactionRep < repGoal) {
		workForFaction(faction, 'hacking');
		sleep(30000);
		currentFactionRep = getFactionRep(faction);
	}
}

//////////

if (factionTwo === '-') {
    numberOfFactions = 1;
    
    factionGrind(factionOne, factionOneGoalRep);
} else {
    factionGrind(factionOne, factionOneGoalRep);
    factionGrind(factionTwo, factionTwoGoalRep);
}