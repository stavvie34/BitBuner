goal = args[0];
stats = getStats();

while (stats.strength < goal) {
	gymWorkout('Powerhouse Gym', 'strength');
	sleep(5000);
	stats = getStats();
}

while (stats.defense < goal) {
	gymWorkout('Powerhouse Gym', 'defense');
	sleep(5000);
	stats = getStats();
}

while (stats.dexterity < goal) {
	gymWorkout('Powerhouse Gym', 'dexterity');
	sleep(5000);
	stats = getStats();
}

while (stats.agility < goal) {
	gymWorkout('Powerhouse Gym', 'agility');
	sleep(5000);
	stats = getStats();
}

while (stats.charisma < goal) {
	universityCourse('Rothman University', 'Leadership');
	sleep(5000);
	stats = getStats();
}

tprint('--- DONE! ---');