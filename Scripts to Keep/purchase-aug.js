faction = 'NiteSec';
augmentation = 'Cranial Signal Processors - Gen III';
augmentationCost = getAugmentationCost(augmentation)[1];
money = 0;

function commas(x) {
  return x.toLocaleString();
}

while (money < augmentationCost) {
	difference = augmentationCost - money;
	tprint('You still need $' + commas(difference) + ' to buy ' + augmentation + '.');
	print('You still need $' + commas(difference) + ' to buy ' + augmentation + '.');
	sleep(30000);
	money = getServerMoneyAvailable('home');
}

purchaseAugmentation('NiteSec', 'Cranial Signal Processors - Gen III');
tprint('You now have Cranial Signal Processors - Gen III');
tprint('--- DONE! ---');