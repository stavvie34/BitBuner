target = args[0];

if (fileExists('brutessh.exe', 'home') === true) {
    brutessh(target);
} else {
    
}

if (fileExists('ftpcrack.exe', 'home') === true) {
    ftpcrack(target);
} else {
    
}

if (fileExists('relaysmtp.exe', 'home') === true) {
    relaysmtp(target);
} else {
    
}

if (fileExists('httpworm.exe', 'home') === true) {
    httpworm(target);
} else {
    
}

if (fileExists('sqlinject.exe', 'home') === true) {
    sqlinject(target);
} else {
    
}

nuke(target);

if (hasRootAccess(target) === true) {
    tprint('You have root access to ' + target + ' .');
} else {
    tprint('There was an error, and you do not have root access to ' + ' .');
}