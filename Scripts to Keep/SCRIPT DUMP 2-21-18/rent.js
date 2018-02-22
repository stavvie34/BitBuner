//1% of current funds, per cycle.
allowancePercentage = 0.99;
while (true) {
    currentCash = ((getServerMoneyAvailable('home')) * (allowancePercentage));
    if (getNextHacknetNodeCost() <= currentCash) {
        purchaseHacknetNode();
		print('Bought a new node.');
    } else {
        for (i = 0; i < hacknetnodes.length; i++) {
            node = hacknetnodes[i];
            upgradeCost = node.getLevelUpgradeCost(1);
            if (upgradeCost <= currentCash) {
                node.upgradeLevel(1);
				print('Upgraded level.');
                break;
            } else {
                ramCost = node.getRamUpgradeCost();
                if (ramCost <= currentCash) {
                    node.upgradeRam();
					print('Upgraded ram.');
                    break;
                } else {
                    coreCost = node.getCoreUpgradeCost();
                    if (coreCost <= currentCash) {
                        node.upgradeCore();
						print('Upgraded core.');
                        break;
                    }
                }
            }
        }
    }
}