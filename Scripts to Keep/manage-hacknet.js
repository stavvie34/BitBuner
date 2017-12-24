while (true) {
    if (hacknetnodes.length < 30)
        purchaseHacknetNode();
    hacknetnodes[0].upgradeLevel();
    hacknetnodes[0].upgradeRam();
    hacknetnodes[0].upgradeCore();
    for (i = 0; i < hacknetnodes.length; i = i + 1) {
        while (hacknetnodes[i].level < hacknetnodes[0].level)
            hacknetnodes[i].upgradeLevel(1);
        continue = true;
        while (hacknetnodes[i].ram < hacknetnodes[0].ram && continue)
            continue = hacknetnodes[i].upgradeRam();
        continue = true;
        while (hacknetnodes[i].cores < hacknetnodes[0].cores && continue)
            continue = hacknetnodes[i].upgradeCore();

    };
}