faction = args[0];

possibleAugmentations = getAugmentationsFromFaction(faction);


function commas(x) {
  return x.toLocaleString();
}

for (i = 0; i < possibleAugmentations.length; i = i + 1) {
    tprint('-------------------------------------------------------------------');
    currentAugmentation = possibleAugmentations[i];
    
    repCost = getAugmentationCost(currentAugmentation)[0];
    cashCost = getAugmentationCost(currentAugmentation)[1];
    
    tprint('You will need ' + commas(repCost) + ' reputation to purchase ' + currentAugmentation + '.');
    tprint('You will need $' + commas(cashCost) + ' to purchase ' + currentAugmentation + '.');
}

tprint('/////////////');
tprint('--- DONE! ---');
tprint('/////////////');