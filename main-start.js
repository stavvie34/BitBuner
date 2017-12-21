// Servers with 1 port
SvrOnePort = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym'];

// Go through server list. If the server isn't being targeted, target it. If there is no more cash, kill the target script. Move on to the next server.
for (i = 0; i < SvrOnePort.length; i = i + 1) {
	targetOnePort = SvrOnePort[i];
	// maxThreads = ((getServerRam('home')[1]) / 2.60);
	// currentCash = getServerMoneyAvailable(targetOnePort);
	
	if ((isRunning('hack-target.script', 'home', 25200, targetOnePort)) === false) {
		exec('hack-target.script', 'home', 25200, targetOnePort);
	}
	
	while ((getServerMoneyAvailable(targetOnePort)) > 0) {
	    tprint((getServerMoneyAvailable(targetOnePort)));
	    sleep(5000);
	}
	
	kill('hack-target.script', 'home', targetOnePort);
	sleep(10000);
}

exec('buy-servers.script', 'home');

if ((isRunning('buy-servers.script', 'home')) === false) {
	exec('all-server.script', 'home');
}