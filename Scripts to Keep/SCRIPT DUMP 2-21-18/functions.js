///////////////
// Functions //
///////////////

// To find how many port busters you have, and add them to a portBusters array
function findPortBusters() {
	if (fileExists('brutessh.exe', 'home') === true) {
		portBusters.push('brutessh.exe');
		tprint('You own BruteSSH.exe');
	}

	if (fileExists('ftpcrack.exe', 'home') === true) {
		portBusters.push('ftpcrack.exe');
		tprint('You own FTPCrack.exe');
	}

	if (fileExists('relaysmtp.exe', 'home') === true) {
		portBusters.push('relaysmtp.exe');
		tprint('You own relaySMTP.exe');
	}

	if (fileExists('httpworm.exe', 'home') === true) {
		portBusters.push('httpworm.exe');
		tprint('You own HTTPWorm.exe');
	}

	if (fileExists('sqlinject.exe', 'home') === true) {
		portBusters.push('sqlinject.exe');
		tprint('You own SQLInject.exe');
	}
}


// To gain root access to a server depending on how many port busters you have
function openSesame(target) {
	if ((portBusters.length) === 1) {
		brutessh(target);
		tprint('Opened port with BruteSSH.');
	}

	if ((portBusters.length) === 2) {
		brutessh(target);
		tprint('Opened port with BruteSSH.');
		ftpcrack(target);
		tprint('Opened port with FTPCrack.');
	}

	if ((portBusters.length) === 3) {
		brutessh(target);
		tprint('Opened port with BruteSSH.');
		ftpcrack(target);
		tprint('Opened port with FTPCrack.');
		relaysmtp(target);
		tprint('Opened port with relaySMTP.');
	}

	if ((portBusters.length) === 4) {
		brutessh(target);
		tprint('Opened port with BruteSSH.');
		ftpcrack(target);
		tprint('Opened port with FTPCrack.');
		relaysmtp(target);
		tprint('Opened port with relaySMTP.');
		httpworm(target);
		tprint('Opened port with HTTPWorm.');
	}

	if ((portBusters.length) === 5) {
		brutessh(target);
		tprint('Opened port with BruteSSH.');
		ftpcrack(target);
		tprint('Opened port with FTPCrack.');
		relaysmtp(target);
		tprint('Opened port with relaySMTP.');
		httpworm(target);
		tprint('Opened port with HTTPWorm.');
		sqlinject(target);
		tprint('Opened port with SQLInject.');
	}

	nuke(target);
}


// Make it easier to read numbers longer than 3 digits
function commas(number) {
	return number.toLocaleString();
}


// Prints text in an easy to read way
function text(statement) {
	print('-----------------------------------------------------------------');
	print(statement);
	print('-----------------------------------------------------------------');
}