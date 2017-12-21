//Srvs = ['server0', 'server1', 'server2', 'server3', 'server4', 'server5', 'server6', 'server7', 'server8', 'server9', 'server10', 'server11', 'server12', 'server13', 'server14', 'server15', 'server16', 'server17', 'server18', 'server19', 'server20', 'server21', 'server22', 'server23', 'server24'];

function spider() {
    // Return an array of all identifiable servers

    // Create a serversSeen array, containing only 'home' for now
    serversSeen = ['home'];

    // For every server we've seen so far, do a scan
    for (i = 0; i < serversSeen.length; i++) {
        thisScan = scan(serversSeen[i]);
        // Loop through results of the scan, and add any new servers
        for (j = 0; j < thisScan.length; j++) {
            // If this server isn't in serversSeen, add it
            if (serversSeen.indexOf(thisScan[j]) === -1) {
                serversSeen.push(thisScan[j]);
            }
        }
    }
    return serversSeen;
}


allServers = spider();

for (i = 0; i < allServers.length; i++) {
    scp('main-script-purchased-servers.script', allServers[i]);
	scp('RemoteGrow.script', allServers[i]);
	scp('RemoteHack.script', allServers[i]);
	scp('RemoteWeaken.script', allServers[i]);
	tprint('Scripts copied to ' + allServers[i]);
	
	
	exec('main-script-purchased-servers.script', allServers[i]);

}




tprint('//////////////////////////////////////////////////');
tprint('---------- Working on Purchased Servers ----------');
tprint('//////////////////////////////////////////////////');




//While the main-server script doesn't exist on the last server
while((isRunning('main-script-purchased-servers.script', 'server24')) === false) {
    for (i = 0; i < Srvs.length; i = i + 1) {
        currentSrv = Srvs[i];   		
		//totalRam = getServerRam(currentSrv)[0];
		availableRam = getServerRam(currentSrv)[1];
		
		//While there is SOME script running on the current purchased server AND you aren't working on killing any scripts
		while ((availableRam > 0) === true && ((isRunning('kill-server-scripts.script', 'home')) === false)) {
			exec('kill-server-scripts.script', 'home');
		}
        
        tprint('------------------------------');
		tprint('No more scripts running on ' + currentSrv);
		
        scp('main-script-purchased-servers.script', currentSrv);
		scp('RemoteGrow.script', currentSrv);
        scp('RemoteHack.script', currentSrv);
        scp('RemoteWeaken.script', currentSrv);
		tprint('Scripts copied to ' + currentSrv);
		
		exec('main-script-purchased-servers.script', currentSrv);
       
        //If the main-server script is running on the server
        if ((isRunning('main-script-purchased-servers.script', currentSrv)) === true) {
            tprint(currentSrv + ' is now runnning main-script-purchased-servers.script');
        } else {
            tprint('There was an error, and the script is not running on ' + currentSrv);
        }
    }
}

tprint('------------------------------');
tprint('*** DONE! ***');