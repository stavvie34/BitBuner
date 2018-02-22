function calcGainRate(X, Y, Z) {
    return (X*1.6) * Math.pow(1.035,Y-1) * ((Z+5)/6);
}
function gainFromLevelUpgrade(X, Y, Z) {
    return (1*1.6) * Math.pow(1.035,Y-1) * ((Z+5)/6);
}
function gainFromRamUpgrade(X, Y, Z) {
    return (X*1.6) * (Math.pow(1.035,(2*Y)-1) - Math.pow(1.035,Y-1)) * ((Z+5)/6);
}
function gainFromCoreUpgrade(X, Y, Z) {
    return (X*1.6) * Math.pow(1.035,Y-1) * (1/6);
}
function hNodes(){  //Wrapper to save on RAM costs
    return hacknetnodes;
}
function upgradeNodeLevel(X, i, levels){   //Wrapper to save on RAM costs
    print("Node " + i + ": Attempting Level Upgrade: " + hNodes()[i].upgradeLevel(levels));
}
function upgradeNodeRam(Y, i){             //Wrapper to save on RAM costs
    print("Node " + i + ": Attempting RAM Upgrade: " + hNodes()[i].upgradeRam());
}
function upgradeNodeCore(Z, i){            //Wrapper to save on RAM costs
    print("Node " + i + ": Attempting Core Upgrade: " + hNodes()[i].upgradeCore());
}

breakevenTime = 3600*4;//Time in seconds

//Ensure at least one node has been purchased
if(hNodes().length === 0) purchaseHacknetNode();

//Calculate the gain multiplier by checking actual gain vs theoretical
firstNode = hNodes()[0];
X = firstNode.level;
Y = firstNode.ram;
Z = firstNode.cores;
gainMul = firstNode.moneyGainRatePerSecond/calcGainRate(X,Y,Z);

checkForMoreUpgrades = true;
while(checkForMoreUpgrades) {
    checkForMoreUpgrades = false;

    //Update the first node
    if ( (X < 200) &&
        (firstNode.getLevelUpgradeCost(1) < (breakevenTime * gainMul * gainFromLevelUpgrade(X, Y, Z))) ) {
        upgradeNodeLevel(X,0,1);
        checkForMoreUpgrades = true;
    }
    if ( (Y < 64) &&
        (firstNode.getRamUpgradeCost() < (breakevenTime * gainMul * gainFromRamUpgrade(X, Y, Z))) ) {
        upgradeNodeRam(Y,0);
        checkForMoreUpgrades = true;
    }
    if ( (Z < 16) &&
        (firstNode.getCoreUpgradeCost() < (breakevenTime * gainMul * gainFromCoreUpgrade(X, Y, Z))) ) {
        upgradeNodeCore(Z,0);
        checkForMoreUpgrades = true;
    }

    //Buy more nodes if cost effective 
    if( getNextHacknetNodeCost() < (breakevenTime * hNodes()[0].moneyGainRatePerSecond / 2) ) {
        i = purchaseHacknetNode();
        print("Bought a new node: " + i);
        checkForMoreUpgrades = true;
    }

    //Match all extra nodes to the first node
    for (i = 1; i < hNodes().length; i++){
        while(hNodes()[i].level < hNodes()[0].level)
            upgradeNodeLevel(hNodes()[i].level, i,(hNodes()[0].level - hNodes()[i].level));
        while(hNodes()[i].ram < hNodes()[0].ram)
            upgradeNodeRam(hNodes()[i].ram, i);
        while(hNodes()[i].cores < hNodes()[0].cores)
            upgradeNodeCore(hNodes()[i].cores, i);
    }
}

tprint("Done.");