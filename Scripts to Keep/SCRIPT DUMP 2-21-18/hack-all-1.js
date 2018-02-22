//servers = ['unitalife', 'aerocorp', 'stormtech', 'univ-energy', 'nova-med', 'zeus-med', 'deltaone', 'fulcrumtech', 'global-pharm', 'blade', 'omnitek', 'clarkeinc', '4sigma', 'b-and-a', 'kuai-gong', 'nwo', 'megacorp', 'ecorp'];
servers = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'crush-fitness', 'johnson-ortho', 'the-hub', 'comptek', 'netlink', 'rothman-uni', 'catalyst', 'summit-uni', 'rho-construction', 'millenium-fitness', 'aevum-police', 'alpha-ent', 'syscore', 'lexo-corp', 'snap-fitness', 'global-pharm', 'applied-energetics', 'unitalife', 'nova-med', 'zb-def', 'zb-institute', 'vitalife', 'titan-labs', 'solaris', 'microdyne', 'helios', 'deltaone', 'icarus', 'omnia', 'defcomm', 'galactic-cyber', 'infocomm', 'taiyang-digital', 'stormtech', 'aerocorp', 'clarkeinc', 'omnitek', '4sigma', 'blade', 'b-and-a', 'ecorp', 'fulcrumtech', 'megacorp', 'kuai-gong', 'fulcrumassets', 'powerhouse-fitness'];
thisServer = args[0];
//scriptRam = getScriptRam(script, 'home');
scriptRam = 1.50;
totalRam = ((getServerRam('home')[0]) - (getServerRam('home')[1]));
maxThreads = (Math.floor(totalRam / scriptRam));
totalLoot = 0;

function commas(x) {
  return x.toLocaleString();
}

function toTime(x) {
	timeArray = [];
	
	if (x > 60) {
		timeArray.push(Math.trunc(x / 60));
		timeArray.push(x - (Math.trunc(x / 60) * 60));
	} else {
		timeArray.push(0);
		timeArray.push(Math.ceil(x));
	}  
  return (timeArray);
}

for (i = 0; i < servers.length; i = i + 1) {
	currentServer = servers[i];
	startMoney = getServerMoneyAvailable(currentServer);
	hackTime = toTime(getHackTime(currentServer));
	
	//Make sure to have all 5 portbusters
	//exec('open-sesame.script', thisServer, 1, currentServer, 5);
	//tprint('Executed open-sesame to open ' + currentServer + '.');
	//sleep(4000);
	
	tprint('------------------------------------------------');
	
	brutessh(currentServer);
	ftpcrack(currentServer);
	relaysmtp(currentServer);
	httpworm(currentServer);
	sqlinject(currentServer);
	nuke(currentServer);
	
	tprint('You now have root access on ' + currentServer + '.');
	/*
	while (scriptRunning('open-sesame.script', thisServer) === true) {
		sleep(8000);
	}
	*/
	
	//killall('home');
	//tprint('Killing all scripts on home machine...');
	//sleep(8000);
	
	exec('RemoteHack.script', 'home', maxThreads, currentServer);
	tprint('Executed RemoteHack to hack ' + currentServer + '.');
	
	if (hackTime[0] !== 0) {
		tprint('It will take ' + commas(hackTime[0]) + ' minutes, and ' + hackTime[1] + ' seconds to hack ' + currentServer + '.');
	} else {
		tprint('It will take ' + hackTime[1] + ' seconds to hack ' + currentServer + '.');
	}
	
	tprint('Sleeping...');
	while (scriptRunning('RemoteHack.script', 'home') === true) {
		sleep(8000);
		//tprint('RemoteHack still working on ' + currentServer + '. Sleeping...');
	}
	
	tprint('Finished hacking ' + currentServer + '.');
	tprint('You just gained $' + (commas(startMoney)) + '.');
	tprint('--- TEST --- startMoney = ' + commas(startMoney));
	
	totalLoot = (totalLoot + startMoney);
	tprint('--- TEST --- totalLoot = ' + totalLoot);
	
	tprint('Your total loot now = $' + (commas(totalLoot)) + '.');
}

tprint('-------------------------------------------------------');
tprint('All of the servers on the list have been hacked 1 time.');
tprint('-------------------------------------------------------');
tprint('In total, you gained $' + totalLoot);
tprint('-------------------------------------------------------');
tprint('/////////////');
tprint('--- DONE! ---');
tprint('/////////////');