/*
Only works if you have enough multipliers to the point where growing a server will increase your hack exp signficantly.
*/


//Servers with 1 port.
SvrOnePort = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym'];

//All servers that aren't faction servers.
scanArray = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'crush-fitness', 'johnson-ortho', 'the-hub', 'comptek', 'netlink', 'rothman-uni', 'catalyst', 'summit-uni', 'rho-construction', 'millenium-fitness', 'aevum-police', 'alpha-ent', 'syscore', 'lexo-corp', 'snap-fitness', 'global-pharm', 'applied-energetics', 'unitalife', 'nova-med', 'zb-def', 'zb-institute', 'vitalife', 'titan-labs', 'solaris', 'microdyne', 'helios', 'deltaone', 'icarus', 'omnia', 'defcomm', 'galactic-cyber', 'infocomm', 'taiyang-digital', 'stormtech', 'aerocorp', 'clarkeinc', 'omnitek', '4sigma', 'blade', 'b-and-a', 'ecorp', 'fulcrumtech', 'megacorp', 'kuai-gong', 'fulcrumassets', 'powerhouse-fitness'];

tprint('//////////////////////////////////');
tprint('          Starting Up...          ');
tprint('//////////////////////////////////');


/*
tprint('//////////////////////////');
tprint('Purchasing Hacknet node...');
tprint('//////////////////////////');


//Buy a hacknet node.
purchaseHacknetNode();


tprint('                                      ');
tprint('//////////////////////////////////////');
tprint('Successfully purchased 1 hacknet node.');
tprint('//////////////////////////////////////');


//Run the hacknet script.
exec('hacknet-test.script', 'home');




tprint('                              ');
tprint('//////////////////////////////');
tprint('Hacknet script is now running.');
tprint('//////////////////////////////');

*/

tprint(' ');
tprint('///////////////////////////////////////////////////');
tprint('Hacking all cash available on all 1 port servers...');
tprint('///////////////////////////////////////////////////');


//Go through 1 port server list. If the server isn't being targeted, target it. If there is no more cash, kill the target script. Move on to the next server.
for (i = 0; i < SvrOnePort.length; i = i + 1) {
	targetOnePort = SvrOnePort[i];
	// maxThreads = ((getServerRam('home')[1]) / 2.60);
	// currentCash = getServerMoneyAvailable(targetOnePort);
	
	//!!! Remember to change to the max threads you can run for your home RAM. Currently configured for 65,536.00 GB of RAM.
	if ((scriptRunning('base-target.script', 'home')) === false) {
	exec('base-target.script', 'home', 476500, targetOnePort);
	}
	
	if ((scriptRunning('base-target.script', 'home')) === true) {
		print('base-target script still running');
	    sleep(10000);
	}
	
	sleep(10000);
}


tprint(' ');
tprint('///////////////////////////////////////////////');
tprint('All servers have been hacked of all their cash.');
tprint('///////////////////////////////////////////////');


//Run the main server script on the home server
exec('main-server.script', 'home');


tprint(' ');
tprint('////////////////////////////');
tprint('Running main script on home.');
tprint('////////////////////////////');
tprint(' ');
tprint('///////////////////////////////////');
tprint('Main script is now running on home.');
tprint('///////////////////////////////////');


tprint(' ');
tprint('//////////////////////');
tprint('Buying 1 TB servers...');
tprint('//////////////////////');


//Once you've gone through the 1 port servers and taken all availabel cash, execute script to buy *25* 1 TB servers).
exec('buy-servers.script', 'home');


//If you are still buying servers, wait for 5 seconds and check again.
while ((isRunning('buy-servers.script', 'home')) === true) {
	sleep(5000);
}


tprint('                                 ');
tprint('/////////////////////////////////');
tprint('Sucessfully purchased 25 servers.');
tprint('/////////////////////////////////');
tprint('                                 ');
tprint('///////////////////////////////////////////');
tprint('Running main script on purchased servers...');
tprint('///////////////////////////////////////////');

//Once you aren't buying servers anymore, run the script too run 'main-server.script' on all your purchased servers.
exec('all-server.script', 'home');


//If you are still running the all server script, wait for 5 seconds and check again.
while((isRunning('all-server.script', 'home')) === true) {
	sleep(5000);
}


tprint('                                                   ');
tprint('///////////////////////////////////////////////////');
tprint('Main server script is running on purchased servers.');
tprint('///////////////////////////////////////////////////');
tprint('                                   ');
tprint('///////////////////////////////////');
tprint('Working on all available servers...');
tprint('///////////////////////////////////');


//Go through all other servers. Copy necessary scripts to them. Run the main-server.script on each one.
for (i = 0; i < scanArray.length; i++) {
	//Copy scripts to each server in the array.	
	scp('main-server.script', scanArray[i]);
	scp('RemoteGrow.script', scanArray[i]);
	scp('RemoteHack.script', scanArray[i]);
	scp('RemoteWeaken.script', scanArray[i]);

	tprint('                                 ');
	tprint('/////////////////////////////////');
	tprint('Scripts copied to ' + scanArray[i]);
	tprint('/////////////////////////////////');

	//Run the main server script on each server in the array.
	exec('main-server.script', scanArray[i]);

	tprint('                                                    ');
	tprint('////////////////////////////////////////////////////');
	tprint('Main server script is now running on ' + scanArray[i]);
	tprint('////////////////////////////////////////////////////');	
}



tprint('                                   ');
tprint('///////////////////////////////////');
tprint('          Main Start DONE!         ');
tprint('///////////////////////////////////');