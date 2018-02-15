// Change the desired starting script
script = 'base-target.script';

scriptRam = getScriptRam(script, 'home');
totalRam = (getServerRam('home')[0]);
usedRam = (getServerRam('home')[1]);
maxThreads = (Math.floor((totalRam) / (scriptRam)));

// Wait for starter script on home to die
sleep(1500);

if ((fileExists('BruteSSH.exe', 'home')) === true) {	
	tprint('You own BruteSSH.exe.');
	tprint('Taking algorithms course at Rothman University...');
	sleep(2000);
	
	playerStats = getStats();
	
	exec(script, 'home', maxThreads, 'foodnstuff');
	
	while (playerStats.hacking < 100) {
		universityCourse('Rothman University', 'algorithms');
		sleep(10000);
		playerStats = getStats();
		print('Player hacking level = ' + playerStats.hacking);
	}
	
	commitCrime('homicide');
	
	tprint('You now have the requirements to hack iron-gym');
	killall('home');
	sleep(5000);
	exec('all-server.script', 'home', 1, 'base-target.script', 'foodnstuff');
} else {
	tprint('You do not own BruteSSH.exe.');
	tprint('Taking algorithms course at Rothman University...');
	sleep(2000);
	
	playerStats = getStats();
	
	while (playerStats.hacking < 50) {
		universityCourse('Rothman University', 'algorithms');
		sleep(10000);
		playerStats = getStats();
		print('Player hacking level = ' + playerStats.hacking);
	}
	
	commitCrime('homicide');
	sleep(5000);
	
	tprint('Your hacking level is now 50.');
	tprint('Running all-server.script...');
	
	tprint('Sleeping for 30 seconds...');
	exec('all-server.script', 'home', 1, 'base-target.script', 'foodnstuff');
	sleep(10000);
	tprint('20 seconds left...');
	sleep(10000);
	tprint('10 seconds left...');
	sleep(5000);
	tprint('5 seconds left...');
	sleep(5000);	
	
	tprint('Creating BruteSSH.exe...');
	sleep(2000);
	
	createProgram('BruteSSH.exe');
	
	while ((isBusy()) === true) {
		sleep(10000);
	}
	
	tprint('BruteSSH.exe has been created.');
	
	if (playerStats.hacking < 100) {
		while (playerStats.hacking < 100) {
			universityCourse('Rothman University', 'algorithms');
			sleep(10000);
			playerStats = getStats();
			tprint('Player hacking level = ' + playerStats.hacking);
		}
	}
	
	commitCrime('homicide');
	
	tprint('You now have the requirements to hack iron-gym');
	killall('home');
	sleep(7000);
	exec('all-server.script', 'home', 1, 'base-target.script', 'foodnstuff');
}