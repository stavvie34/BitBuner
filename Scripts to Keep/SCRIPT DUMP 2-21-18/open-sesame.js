target = args[0];
numPortBusters = args[1];

if (numPortBusters === 0) {
    nuke(target);
    tprint(target + ' is open fa bidnez.');
}

if (numPortBusters === 1) {
    brutessh(target);
    nuke(target);
    tprint(target + ' is open fa bidnez.');
}

if (numPortBusters === 2) {
    brutessh(target);
    ftpcrack(target);
    nuke(target);
    tprint(target + ' is open fa bidnez.');
}

if (numPortBusters === 3) {
    brutessh(target);
    ftpcrack(target);
    relaysmtp(target);
    nuke(target);
    tprint(target + ' is open fa bidnez.');
}

if (numPortBusters === 4) {
    brutessh(target);
    ftpcrack(target);
    relaysmtp(target);
    httpworm(target);
    nuke(target);
    tprint(target + ' is open fa bidnez.');
}

if (numPortBusters === 5) {
    brutessh(target);
    ftpcrack(target);
    relaysmtp(target);
    httpworm(target);
    sqlinject(target);
    nuke(target);
    tprint(target + ' is open fa bidnez.');
}

tprint('///// --- DONE! --- /////');