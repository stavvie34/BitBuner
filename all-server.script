//List of host servers
hosts = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net'];

weakenSrvs = ['server0', 'server1', 'server2', 'server3', 'server4', 'server5', 'server6', 'server7', 'server8', 'server9'];
//You have to have root access to the target in order to run the main script that hacks it
target = args[0];

// *** NOT working right now???  numThreadsTarget = Math.floor(getServerRam(target)[1] / 2.30);
scriptIncome = getScriptIncome('hack-harakiri-sushi.script', 'home', target);



tprint('///////////////////////////////////////////////');
tprint('---------- Working on Weaken Servers ----------');
tprint('///////////////////////////////////////////////');

//While the weaken script isn't running on the last weaken server
while((isRunning('weaken.script', 'server9', target)) === false) {
    for (i = 0; i < weakenSrvs.length; i = i + 1) {
        currentWeakenSrv = weakenSrvs[i];
        // ***Not working ?    numThreadsWeaken = Math.floor(getServerRam(weakenSrvs[i])[1] / 1.75);
        svrWeakenTime = getWeakenTime(weakenSrvs[i]);
        
        
        tprint('------------------------------');
        scp('weaken.script', currentWeakenSrv);
        
        // Weaken servers must have 1024GB free
        exec('weaken.script', currentWeakenSrv, 585, target);
        
        //If the weaken script is running on the weaken server
        if ((isRunning('weaken.script', currentWeakenSrv, target)) === true) {
            tprint(currentWeakenSrv + ' is now runnning weaken.script with 585 threads');
        } else {
            tprint('There was an error, and the weaken script is not running on ' + currentWeakenSrv);
        }
        sleep(((svrWeakenTime / 2) * 1000));
    }
}

//while the hack script isn't runnnin on home
while((isRunning('hack-harakiri-sushi.script', 'home', target)) === false) {
    
    //homeThreads = Math.floor(getServerRam('home')[1] / 1.75);
    
    tprint('//////////////////////////////////////////////////');
    tprint('---------- Finished with weaken servers ----------');
    tprint('//////////////////////////////////////////////////');
    
    
    exec('hack-harakiri-sushi.script', 'home', 6968, target);
    
    if ((isRunning('hack-harakiri-sushi.script', 'home', target)) === true) {
        tprint('The main script is successfully running.');
    } else {
        tprint('There was an error, and the main script is not running.');
    }
}

while(true) {
    tprint('Waiting 5 minutes to check income.')
    sleep(300000);
    tprint('------------------------------');
    tprint('You are earning ' + scriptIncome + ' per second.');
}