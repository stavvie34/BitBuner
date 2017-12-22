//Use if you know you are going to step away from the computer for a decent amount of time.
//Basically this will provide a fallback for main-server.script.
//Main-server.script stops when you're offline. It keeps running the scan array. That's no good. Unless I'm wrong. Then lol.

//All servers that aren't faction servers.
svrs = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'crush-fitness', 'johnson-ortho', 'the-hub', 'comptek', 'netlink', 'rothman-uni', 'catalyst', 'summit-uni', 'rho-construction', 'millenium-fitness', 'aevum-police', 'alpha-ent', 'syscore', 'lexo-corp', 'snap-fitness', 'global-pharm', 'applied-energetics', 'unitalife', 'nova-med', 'zb-def', 'zb-institute', 'vitalife', 'titan-labs', 'solaris', 'microdyne', 'helios', 'deltaone', 'icarus', 'omnia', 'defcomm', 'galactic-cyber', 'infocomm', 'taiyang-digital', 'stormtech', 'aerocorp', 'clarkeinc', 'omnitek', '4sigma', 'blade', 'b-and-a', 'ecorp', 'fulcrumtech', 'megacorp', 'kuai-gong', 'fulcrumassets', 'powerhouse-fitness', 'server-0', 'server-1', 'server-2', 'server-3', 'server-4', 'server-5', 'server-6', 'server-7', 'server-8', 'server-9', 'server-10', 'server-11', 'server-12', 'server-13', 'server-14', 'server-15', 'server-16', 'server-17', 'server-18', 'server-19', 'server-20', 'server-21', 'server-22', 'server-23', 'server-24'];


tprint('///////////////////////////////////////////////');
tprint('     Killing all scripts on all servers...     ');
tprint('///////////////////////////////////////////////');


//Kill all scripts on all servers
for (i = 0; i < svrs.length; i = i +1) {
	currentSvr = svrs[i];
	
	killall(svrs[i]);
}

tprint('////////////////////////////////////////////////////////');
tprint('     All scripts on all servers successfully killed     ');
tprint('////////////////////////////////////////////////////////');
tprint('                                                      ');
tprint('//////////////////////////////////////////////////////');
tprint('     Running base-target script on all servers...     ');
tprint('//////////////////////////////////////////////////////');


//Copy base-target.script to all servers. Run it with the maximum amount of threads possible. 
for (j = 0; j < svrs.length; j = j + 1) {
	currentSvr = svrs[j];
	
	scp('base-target.script', currentSvr);
	svrRam = ((getServerRam(currentSvr)[0]) - (getServerRam(currentSvr)[1]));
	scriptRam = (getScriptRam('base-target.script', currentSvr));
	
	maxThreads = Math.floor((svrRam) / (scriptRam));
	
	if (maxThreads >= 1) {
		exec('base-target.script', currentSvr, maxThreads, currentSvr);	
	} else {
	}
}


tprint('                                                       ');
tprint('///////////////////////////////////////////////////////');
tprint('     Successfully executed scripts on all servers.     ');
tprint('///////////////////////////////////////////////////////');
tprint('          *** DONE! ***     ');

killall('home');

homeRam = ((getServerRam('home')[0]) - (getServerRam('home')[1]));
homeScriptRam = (getScriptRam('base-target.script', 'home'));

maxHomeThreads = Math.floor((homeRam) / (homeScriptRam));

exec('base-target.script', 'home', maxHomeThreads, 'iron-gym');


/*
Problems?

1. If you don't have root access, you can't run the scripts.
2. Once it gets to purchased servers, you should swithc your target to a server with money instead of the host
*/