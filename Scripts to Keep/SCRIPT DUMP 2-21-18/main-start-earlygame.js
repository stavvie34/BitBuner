//Servers with 0 port
//serverZeroPort = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'hong-fang-tea', 'harakiri-sushi'];

//target = args[0];

//Servers with 1 port.
//serverOnePort = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym'];

//All servers that aren't faction servers.
servers = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'crush-fitness', 'johnson-ortho', 'the-hub', 'comptek', 'netlink', 'rothman-uni', 'catalyst', 'summit-uni', 'rho-construction', 'millenium-fitness', 'aevum-police', 'alpha-ent', 'syscore', 'lexo-corp', 'snap-fitness', 'global-pharm', 'applied-energetics', 'unitalife', 'nova-med', 'zb-def', 'zb-institute', 'vitalife', 'titan-labs', 'solaris', 'microdyne', 'helios', 'deltaone', 'icarus', 'omnia', 'defcomm', 'galactic-cyber', 'infocomm', 'taiyang-digital', 'stormtech', 'aerocorp', 'clarkeinc', 'omnitek', '4sigma', 'blade', 'b-and-a', 'ecorp', 'fulcrumtech', 'megacorp', 'kuai-gong', 'fulcrumassets', 'powerhouse-fitness'];

tprint('//////////////////////////////////');
tprint('          Starting Up...          ');
tprint('//////////////////////////////////');

tprint(' ');
tprint('//////////////////////////////////////');
tprint('     Running script on Servers...     ');
tprint('//////////////////////////////////////');

target = args[0];


pservers = ['server-0', 'server-1', 'server-2', 'server-3', 'server-4', 'server-5', 'server-6', 'server-7', 'server-8', 'server-9', 'server-10', 'server-11', 'server-12', 'server-13', 'server-14', 'server-15', 'server-16', 'server-17', 'server-18', 'server-19', 'server-20', 'server-21', 'server-22', 'server-23', 'server-24'];
//target = args[0];




i = 0;
while(i < 25) {
    if (getServerMoneyAvailable("home") > 51200000) {
        purchaseServer("server-" + i, 1024);
        
        //exec("early-hack-template.script", hostname, 1, "joesguns", 1000000000, 10);
        ++i;
    }
}

for (j = 0; j < pservers.length; j = j + 1) {
    currentServer = pservers[j];
    
    //scp('RemoteGrow.script', 'home', currentServer);
    //scp('RemoteHack.script', 'home', currentServer);
    //scp('RemoteWeaken.script', 'home', currentServer);
    //scp('shit.script', 'home', currentServer);
    
    serverRamAvailable = ((getServerRam(currentServer)[0]) - (getServerRam(currentServer)[1]));
    scriptRam = 1.75;
    maxThreads = (Math.floor((serverRamAvailable) / (scriptRam)));
    
    
    if (hasRootAccess(target) === false) {
		if (fileExists('brutessh.exe', 'home') === true)
			brutessh(target);
		if (fileExists('ftpcrack.exe', 'home') === true)
			ftpcrack(target);
		if (fileExists('relaysmtp.exe', 'home') === true)
			relaysmtp(target);
		if (fileExists('httpwork.exe', 'home') === true)
			httpworm(target);
		if (fileExists('sqlinject.exe', 'home') === true)
			sqlinject(target);
		nuke(target);
	}

    
    scp('constant-weaken.script', 'home', currentServer);
    
    exec('constant-weaken.script', currentServer, maxThreads, target);
    
    print('Ya got shit runnin on ' + currentServer + ' yo.');
}

tprint('Bruh the script is done buyin shit and runnin shit on it.');






//host = args[0];

//maxThreads = Math.floor((((getServerRam(host)[0]) - (getServerRam(host)[1])) / 1.75));


homeRamAvailable = ((getServerRam('home')[0]) - (getServerRam('home')[1]));
homeScriptRam = getScriptRam('base-target.script', 'home');
homeThreads = (Math.floor((homeRamAvailable / 1.75)));

exec('constant-weaken.script', 'home', homeThreads, target);

for (i = 0; i < servers.length; i = i + 1) {
	currentServer = servers[i];
	
	if ((isRunning('constant-weaken.script', currentServer)) === false) {
		while (getServerRequiredHackingLevel(currentServer) > getHackingLevel()) {
			sleep(10000);
		}

		serverRamAvailable = ((getServerRam(currentServer)[0]) - (getServerRam(currentServer)[1]));
		scriptRam = 1.75;

		if (serverRamAvailable >= scriptRam) {
			maxThreads = (Math.floor((serverRamAvailable) / (scriptRam)));

			scp('constant-weaken.script', currentServer);

			brutessh(currentServer);
			ftpcrack(currentServer);
			relaysmtp(currentServer);
			httpworm(currentServer);
			sqlinject(currentServer);
			nuke(currentServer);
			
			
			/*
			if (hasRootAccess(currentServer) === false) {
				if (fileExists('brutessh.exe', 'home') === true)
					brutessh(currentServer);
				if (fileExists('ftpcrack.exe', 'home') === true)
					ftpcrack(currentServer);
				if (fileExists('relaysmtp.exe', 'home') === true)
					relaysmtp(currentServer);
				if (fileExists('httpwork.exe', 'home') === true)
					httpworm(currentServer);
				if (fileExists('sqlinject.exe', 'home') === true)
					sqlinject(currentServer);
				nuke(currentServer);
			}
			*/

			exec('constant-weaken.script', currentServer, maxThreads, target);
			print('Script is running on ' + currentServer + '.');
		} else {
			print('There was an error or there was not enough ram on the server');
		}
	} else {
		print('Script is already running on ' + currentServer + '.');
	}
	
	
	
}

/*
	
	
	
	
	
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
tprint('/////////////////////////////////////');
tprint('  Script is running on all Servers.  ');
tprint('/////////////////////////////////////');

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
	
	maxThreads = Math.floor((serverRamAvailable - getScriptRam('main-start-earlygame.script', 'home')) / scriptRam);
	exec('base-target.script', 'home', maxThreads, target);
}

*/






tprint(' ');
tprint('//////////////////////////////');
tprint('       *** DONE! ***          ');
tprint('//////////////////////////////');