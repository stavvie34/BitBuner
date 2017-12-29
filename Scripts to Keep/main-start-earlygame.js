//Servers with 0 port
serverZeroPort = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'hong-fang-tea', 'harakiri-sushi'];

target = args[0];

//Servers with 1 port.
//serverOnePort = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym'];

//All servers that aren't faction servers.
//scanArray = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'crush-fitness', 'johnson-ortho', 'the-hub', 'comptek', 'netlink', 'rothman-uni', 'catalyst', 'summit-uni', 'rho-construction', 'millenium-fitness', 'aevum-police', 'alpha-ent', 'syscore', 'lexo-corp', 'snap-fitness', 'global-pharm', 'applied-energetics', 'unitalife', 'nova-med', 'zb-def', 'zb-institute', 'vitalife', 'titan-labs', 'solaris', 'microdyne', 'helios', 'deltaone', 'icarus', 'omnia', 'defcomm', 'galactic-cyber', 'infocomm', 'taiyang-digital', 'stormtech', 'aerocorp', 'clarkeinc', 'omnitek', '4sigma', 'blade', 'b-and-a', 'ecorp', 'fulcrumtech', 'megacorp', 'kuai-gong', 'fulcrumassets', 'powerhouse-fitness'];

tprint('//////////////////////////////////');
tprint('          Starting Up...          ');
tprint('//////////////////////////////////');

tprint(' ');
tprint('////////////////////////////////////////////////');
tprint('     Running script on Zero Port Servers...     ');
tprint('////////////////////////////////////////////////');

for (i = 0; i < serverZeroPort.length; i = i + 1) {
	currentServer = serverZeroPort[i];
	usrHackLvl = getHackingLevel();
	reqHackLvl = getServerRequiredHackingLevel(currentServer);
	serverRamAvailable = ((getServerRam(currentServer)[0]) - (getServerRam(currentServer)[1]));
	scriptRam = getScriptRam('base-target.script', 'home');
	
	if ((scriptRunning('base-target.script', currentServer)) === true) {
		print('Script already running on ' + currentServer + '.');		
	} else if ((usrHackLvl >= reqHackLvl && serverRamAvailable >= scriptRam) === true) {
		maxThreads = (Math.floor((serverRamAvailable) / (scriptRam)));
		
		scp('base-target.script', currentServer);
		nuke(currentServer);
		
		exec('base-target.script', currentServer, maxThreads, target);
		print('Script is running on ' + currentServer + '.');
	} else {
		sleep(10000);
		print('Waiting for usrHackLvl to increase...');
	}
}

tprint(' ');
tprint('///////////////////////////////////////////////');
tprint('  Script is running on all Zero Port Servers.  ');
tprint('///////////////////////////////////////////////');

tprint(' ');
tprint('////////////////////////////');
tprint('     Working on home...     ');
tprint('////////////////////////////');

serverRamAvailable = Math.floor((getServerRam('home')[0]) - (getServerRam('home')[1]));
scriptRam = getScriptRam('base-target.script', 'home');

if ((scriptRunning('base-target.script', 'home')) === true) {
	print('Script already running on home.');
} else if (serverRamAvailable >= scriptRam) {
	/*
	for (i = 0; i < serverZeroPort.length; i = i + 1) {
		targetServer = serverZeroPort[i];
		maxThreads = (Math.floor((serverRamAvailable) / (scriptRam)));
		
		exec('base-target.script', 'home', maxThreads, targetServer);
		
		tprint(' ');
		tprint('//////////////////////////////////////');
		tprint('     Scripts are running on home.     ');
		tprint('//////////////////////////////////////');
	}
} else {
	tprint(' ');
	tprint('///////////////////////////////////////////');
	tprint('     Not enough RAM available on home.     ');
	tprint('///////////////////////////////////////////');
}
*/	
	maxThreads = Math.floor((serverRamAvailable - getScriptRam('main-start-earlygame.script', 'home')) / scriptRam);
	exec('base-target.script', 'home', maxThreads, target);
}



tprint(' ');
tprint('//////////////////////////////');
tprint('       *** DONE! ***          ');
tprint('//////////////////////////////');