thisHost = getHostname();
thisTarget = args[0];
serverMaxMoney = getServerMaxMoney(thisTarget);
maxGrowThreads = 200;
maxHackThreads = 200;
percentageToSteal = 0.005;
baseSecurity = getServerBaseSecurityLevel(thisTarget);
minSecurity = baseSecurity / 3;
rem = minSecurity % 1;
if (rem >= 0.5) {
    minSecurity = minSecurity + 1 - rem;
} else {
    minSecurity = minSecurity - rem;
}
if (minSecurity < 1) {
    minSecurity = 1;
}
print('minSecurity of ' + minSecurity);
growCoefficient = 1;
hackCoefficient = 1;
offsetGrowCoefficient = 1;
canHack = false;
serverLevel = getServerRequiredHackingLevel(thisTarget);
while (canHack == false) {
    canHack = getHackingLevel() >= serverLevel;
    print ('idling until hack level ' + serverLevel);
}
while(canHack) {
    if (isRunning('weaken.script', thisHost, thisTarget) == false) {
        securityNow = getServerSecurityLevel(thisTarget);
        threadsNeeded = (securityNow - minSecurity) * 10;
        if ((threadsNeeded % 1) > 0) {
            threadsNeeded = threadsNeeded + 1 - (threadsNeeded % 1);
        }
        while (threadsNeeded > 0 && isRunning('weaken.script', thisHost, thisTarget) == false) {
            run('weaken.script', threadsNeeded, thisTarget);
            if (isRunning('weaken.script', thisHost, thisTarget) == true) {
                threadsNeeded = 0;
            }
            if (threadsNeeded > 2001) {
                threadsNeeded = threadsNeeded - 1000;                
            } else if (threadsNeeded > 201) {
                threadsNeeded = threadsNeeded - 100;                
            } else if (threadsNeeded > 21) {
                threadsNeeded = threadsNeeded - 10;
            } else if (threadsNeeded > 1) {
                threadsNeeded = threadsNeeded - 1;
            }
        }
    }
    if (isRunning('weaken.script', thisHost, thisTarget) == false) {
        serverMoney = getServerMoneyAvailable(thisTarget);
        while (growCoefficient == 1) {
            growCoefficient = grow(thisTarget);
            if (growCoefficient == 1) {
                print ('erroneous grow rate results in divide by zero. hacking to allow growth simulation.');
                hack(thisTarget);
            } else {
                print ('approximating grow coefficient as ' + growCoefficient);
            }
        }
        scriptToRun = '';
        if (serverMaxMoney > serverMoney) {
            scriptToRun = 'grow.script';
        } else {
            if (hackCoefficient == 1) {
                hasHacked = false;
                while (hasHacked == false) {
                    print('attempting preliminary hack to gain hack coefficient.');                    
                    hasHacked = hack(thisTarget);                    
                }
                hackCoefficient = hackCoefficient - (getServerMoneyAvailable(thisTarget) / serverMaxMoney);
                print ('approximating hack coefficient as ' + hackCoefficient);
            }
            scriptToRun = 'hack.script';
        }
        threadsNeeded = 0;
        if (scriptToRun == 'grow.script') {
            if (serverMoney == 0) {
                print('maxing grow threads instead of dividing by zero...');
                threadsNeeded = maxGrowThreads
            } else {                
                growCoefficientNeeded = (serverMaxMoney / serverMoney);
                threadsNeeded = growCoefficientNeeded / (growCoefficient - 1);
                print ('approaching ' + growCoefficientNeeded + ' coEff requiring ' + threadsNeeded + ' threads at a growCoeff ' + growCoefficient);
            }
            if (threadsNeeded > maxGrowThreads) {
                print('true thread count needed for growth is ' + threadsNeeded);
                threadsNeeded = maxGrowThreads;
            }
        } else {                
            threadsNeeded = percentageToSteal / hackCoefficient;
            totalRequired = (hackCoefficient * threadsNeeded);
            print('approaching removal of ' + percentageToSteal + ' requires a ' + threadsNeeded + ' thread hack by coEff ' + hackCoefficient);
            if (threadsNeeded > maxHackThreads) {        
                threadsNeeded = maxHackThreads;
            }
        }
        if (threadsNeeded % 1 > 0) {
            threadsNeeded = threadsNeeded + 1 - (threadsNeeded % 1);
        }
        isGrowing = false;
        isHacking = false;
        while (threadsNeeded > 0) {
            run(scriptToRun, threadsNeeded, thisTarget);
            if (isRunning(scriptToRun, thisHost, thisTarget) == true) {
                if (scriptToRun == 'grow.script') {
                    isGrowing = true;
                } else {
                    isHacking = true;
                }
                threadsNeeded = 0;
            }
            if (threadsNeeded > 2001) {
                threadsNeeded = threadsNeeded - 1000;                
            } else if (threadsNeeded > 201) {
                threadsNeeded = threadsNeeded - 100;                
            } else if (threadsNeeded > 21) {
                threadsNeeded = threadsNeeded - 10;
            } else if (threadsNeeded > 1) {
                threadsNeeded = threadsNeeded - 1;
            }
        }
        while (isGrowing == true || isHacking == true) {
            if (isGrowing == true && isRunning('grow.script', thisHost, thisTarget) == false) {
                isGrowing = false;
            } else if (isHacking == true && isRunning('hack.script', thisHost, thisTarget) == false) {
                isHacking = false;
            }
        }
    }
}