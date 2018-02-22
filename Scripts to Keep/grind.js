stats = getStats();
script = 'base-target.script';
scriptRam = getScriptRam('base-target.script', 'home');
totalRam = (getServerRam('home')[0]);
usedRam = (getServerRam('home')[1]);
maxThreads = (Math.floor((totalRam - usedRam) / (scriptRam)));

exec(script, 'home', maxThreads, 'foodnstuff');

while (stats.hacking < 10) {
	universityCourse('Rothman University', 'Computer Science');
	sleep(10000);
	stats = getStats();
}

