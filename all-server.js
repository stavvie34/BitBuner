Srvs = ['server0', 'server1', 'server2', 'server3', 'server4', 'server5', 'server6', 'server7', 'server8', 'server9', 'server10', 'server11', 'server12', 'server13', 'server14', 'server15', 'server16', 'server17', 'server18', 'server19', 'server20', 'server21', 'server22', 'server23', 'server24'];

tprint('//////////////////////////////////////////////////');
tprint('---------- Working on Purchased Servers ----------');
tprint('//////////////////////////////////////////////////');


//While the main-server script doesn't exist on the last server
while((isRunning('main-server.script', 'server24')) === false) {
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
		
        scp('main-server.script.script', currentSrv);
		scp('RemoteGrow.script', currentSrv);
        scp('RemoteHack.script', currentSrv);
        scp('RemoteWeaken.script', currentSrv);
		tprint('Scripts copied to ' + currentSrv);
		
		exec('main-server.script.script', currentSrv);
       
        //If the main-server script is running on the server
        if ((isRunning('main-server.script.script', currentSrv)) === true) {
            tprint(currentSrv + ' is now runnning main-server.script');
        } else {
            tprint('There was an error, and the script is not running on ' + currentSrv);
        }
    }
}

tprint('------------------------------');
tprint('*** DONE! ***');