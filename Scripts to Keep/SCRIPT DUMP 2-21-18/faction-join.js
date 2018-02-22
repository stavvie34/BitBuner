// Wait so you can tail the script
sleep(5000);

print('Beginning on combat factions...');

stats = getStats();

if ((prompt('Would you like to join the Slum Snakes?')) === true) {
	while (stats.strength < 30) {
		currentStrength = stats.strength;
		print('Working on strength...');
		print('Current strength level = ' + currentStrength + '.');
		gymWorkout('Powerhouse Gym', 'strength');
		sleep(5000);
		stats = getStats();
	}

	tprint('You now have the minimum strength level for Slum Snakes!');

	while (stats.defense < 30) {
		currentDefense = stats.defense;
		print('Working on defense...');
		print('Current strength level = ' + currentDefense + '.');
		gymWorkout('Powerhouse Gym', 'defense');
		sleep(5000);
		stats = getStats();
	}

	tprint('You now have the minimum defense level for Slum Snakes!');

	while (stats.dexterity < 30) {
		currentDexterity = stats.dexterity;
		print('Working on dexterity...');
		print('Current dexterity level = ' + currentDexterity + '.');
		gymWorkout('Powerhouse Gym', 'dexterity');
		sleep(5000);
		stats = getStats();
	}

	tprint('You now have the minimum dexterity level for Slum Snakes!');

	while (stats.agility < 30) {
		currentAgility = stats.agility;
		print('Working on agility...');
		print('Current agility level = ' + currentAgility + '.');
		gymWorkout('Powerhouse Gym', 'agility');
		sleep(5000);
		stats = getStats();
	}

	tprint('You now have the minimum agility level for Slum Snakes!');
	tprint('Working on getting enough money to join...');

	for (i = 0; i < 5; i = i + 1) {
		print('Commiting crime to gain money...');
		commitCrime('larceny');
		sleep(93000);
	}
}

commitCrime('homicide');
sleep(5000);

if ((prompt('Do you want to continue to go for the Tetrads?')) === true) {
	print('Traveling to New Tokyo...');
	travelToCity('New Tokyo');

	while (stats.strength < 75) {
		currentStrength = stats.strength;
		print('Working on strength...');
		print('Current strength level = ' + currentStrength + '.');
		gymWorkout('Powerhouse Gym', 'strength');
		sleep(5000);
		stats = getStats();
	}

	tprint('You now have the minimum strength level for Tetrads!');

	while (stats.defense < 75) {
		currentDefense = stats.defense;
		print('Working on defense...');
		print('Current strength level = ' + currentDefense + '.');
		gymWorkout('Powerhouse Gym', 'defense');
		sleep(5000);
		stats = getStats();
	}

	tprint('You now have the minimum defense level for Tetrads!');

	while (stats.dexterity < 75) {
		currentDexterity = stats.dexterity;
		print('Working on dexterity...');
		print('Current dexterity level = ' + currentDexterity + '.');
		gymWorkout('Powerhouse Gym', 'dexterity');
		sleep(5000);
		stats = getStats();
	}

	tprint('You now have the minimum dexterity level for Tetrads!');

	while (stats.agility < 75) {
		currentAgility = stats.agility;
		print('Working on agility...');
		print('Current agility level = ' + currentAgility + '.');
		gymWorkout('Powerhouse Gym', 'agility');
		sleep(5000);
		stats = getStats();
	}

	tprint('You now have the minimum agility level for Tetrads!');	
} else {
	commitCrime('homicide');
	tprint('---DONE!---');
}