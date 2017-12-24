//presume the host to be the machine this script is running on, should probably be home, but don't let it assume so.
hostName = getHostname();
//initialize the scan array with just this host, this provides a starting point and saves a scan() call.
scanArray = [hostName];
//initialize the current scan length to 0
currentScanLength = 0;
//create an object (array) to hold our servers
servers = [];

//some optional values to change the behavior of this method.
debugMode = false;
nukeOnlyMode = false;

mode = 0;

doLoop = true;

portBusters = ['BruteSSH.exe', 'FTPCrack.exe', 'relaySMTP.exe', 'HTTPWorm.exe', 'SQLInject.exe'];

ownedBusters = 0;

//arbitrary value added for valuating min security in a growth formula for speed/growth value.
minSecurityWeight = 100;
//here is where we keep track of the last run Daemon; when we run a new daemon, we kill the old one.
//this is a less sort-heavy method of targetting "optimally", though it comes with its own imperfections
lastTarget = [];
while (doLoop) {
    if (mode === 0) {
        previousScanLength = currentScanLength;
        currentScanLength = scanArray.length;
        for (i = previousScanLength; i < currentScanLength; i++) {
            currentHost = scanArray[i];

            //hostName, numPorts, hackingLevel, maxMoney, growthRate, minSecurity
            //0         1         2             3         4           5
            server = [currentHost, getServerNumPortsRequired(currentHost), getServerRequiredHackingLevel(currentHost), getServerMaxMoney(currentHost), getServerGrowth(currentHost), Math.max(1, Math.round(getServerBaseSecurityLevel(currentHost) / 3))];

            //skip home, we don't need to go nuking our machine. foodnstuff is our de facto test/staging server for debug mode.
            if (server[0] != 'home' && (server[0] == 'foodnstuff' || !debugMode)) {
                //add the server to the servers object
                servers.push(server);
                if (debugMode) {
                    mode = 1;
                    break; //debug mode stops at foodnstuff
                }
            }

            //add this servers connected nodes (other servers) to the scan list
            newScan = scan(currentHost);

            for (j = 0; j < newScan.length; j++) {
                //exclude anything we have already scanned. names are unique indexes which allows this to work.
                if (scanArray.indexOf(newScan[j]) == -1) {
                    scanArray.push(newScan[j]);
                }
            }
        }
        //if we're about to exit the loop, switch a mode variable from 0 to 1. This moves the script to phase 2, nuking.
        if (currentScanLength == scanArray.length) {
            mode = 1;
        }
    } 
    if (mode == 1) {
        ownedBusters = 0;
        //get the port busters you've got so it's one less thing the nuke script has to figure out.
        //this is done inside the while loop for adaptability, but outside the server loop for speed.
        for (i = 0; i < portBusters.length; i++) {
            //always checking the home machine, presumes your port busters always live at home.
            if (fileExists(portBusters[i], 'home')) {
                ownedBusters++;
            }
        }
        print ('Portbusters the program thinks you own: ' + ownedBusters);
        //loop over all the servers and find potential victims.
        for (i = 0; i < servers.length; i++) {
            server = servers[i];
            //we need to know hacking level and ports needed to nuke to determine viable targets.
            numPorts = server[1];
            hackingLevel = server[2];
            minSecurity = server[5];
            //ignore servers above your level and servers you don't have the busters for.
            if (getHackingLevel() >= hackingLevel && numPorts <= ownedBusters) {
                print ('Vulnerable server ' + server[0] + ' found with difficulty of ' + hackingLevel + ' and ports: ' + numPorts);
                //now grab the other data, we're passing this to the knock script so it can pass it further to the daemon.
                target = server[0];
                hasRun = false;
                //we won't nuke if we have access
                if (!hasRootAccess(target)) {
                    if (numPorts > 0) {
                        brutessh(target);
                    }
                    if (numPorts > 1) {
                        ftpcrack(target);
                    }
                    if (numPorts > 2) {
                        relaysmtp(target);
                    }
                    if (numPorts > 3) {
                        httpworm(target);
                    }
                    if (numPorts > 4) {
                        sqlinject(target);
                    }
                    nuke(target);
                }
                if (!nukeOnlyMode) {
                    //we don't run a daemon on anything like CSEC - stuff with no money is nuke-only.
                    maxMoney = server[3];
                    if (maxMoney > 0) {
                        //here is where we can provide our algorithm with some manner of targetting
                        //currently I'm using max money as the only metric, which might be a bit ignorant.
                        //lastTarget[1] is money
                        shouldSwitchTargets = false;
                        //a lastTarget length of 0 means we've never had a target, so we need a first target for starters.
                        if (lastTarget.length === 0) {
                            shouldSwitchTargets = true;
                        } else {
                            //per chapt3r, take minSecurity into account for evaluating best target.
                            weightedValueOfLastTarget = lastTarget[1] * (minSecurityWeight / lastTarget[3]);
                            weightedValueOfCurrentTarget = maxMoney * (minSecurityWeight / minSecurity);
                            //if the last target can make us more money don't switch, just blow it off.
                            shouldSwitchTargets = weightedValueOfLastTarget < weightedValueOfCurrentTarget;
                        }
                        if (shouldSwitchTargets) {
                            if (lastTarget.length > 0) {
                                tprint('Targeting daemon has found a more suitable target than ' + lastTarget[0] + ' - switching to ' + target);
                            }
                            hasRunDaemon = false;
                            growthRate = server[4];
                            while (!hasRunDaemon) {
                                run('daemon.script', 1, target, maxMoney, growthRate, minSecurity, hackingLevel);
                                hasRunDaemon = isRunning('daemon.script', hostName, target, maxMoney, growthRate, minSecurity, hackingLevel);
                            }
                            //since there's a latency in how fast we kill scripts, we don't bother trying to free RAM first
                            //it wouldn't help anyway.
                            if (lastTarget.length > 0) {
                                if (isRunning('daemon.script', hostName, lastTarget[0], lastTarget[1], lastTarget[2], lastTarget[3], lastTarget[4])) {
                                    kill('daemon.script', hostName, lastTarget[0], lastTarget[1], lastTarget[2], lastTarget[3], lastTarget[4]);
                                }
                            }
                            //lastTarget is now our current target - we won't access it again until we're ready to change targets.
                            lastTarget = [target, maxMoney, growthRate, minSecurity, hackingLevel];
                        }
                    }
                }
                //remove the server from the list, it will eventually be compromised. this lets us stop iterating on it.
                servers.splice(i, 1);
            }
        }
        //if there are servers left in the list, keep going.
        doLoop = servers.length > 0
    }
}