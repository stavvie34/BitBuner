// Script to scan through servers to find connections.
// Specifically concerned about faction servers.


//testing to see how scan works
tprint(scan('home', true));


svrsArray = [];
theBlackHand = 'I.I.I.I';



for (i = 0; i < svrsArray.length; i = i +1) {
	
	currentSvr = svrsArray[i];
	
	svrsArray.push()
	
	tprint('///////////////////////////////////');
	tprint('Scanning to find server connections');
	tprint('///////////////////////////////////');
	
	
	
	
}


/*
Scan through all servers starting at home
goes 1 node away at a time
push all these server names into the svrsArray
if you find 'I.I.I.I' in the array, stop scanning



for (i =0; i < 1000; i = i + 1) {
	
	wallet.push(getServerMoneyAvailable('home'));
	
	tprint('------------------------------');
	tprint('You have $' + wallet[i]);
	tprint('------------------------------');
	
	if ((wallet[i] - wallet[i - 1]) > 0) {
		tprint('You have gained $' + (wallet[i] - wallet[i - 1]) + ' in the last 5 minutes.');
	} else if ((wallet[i] - wallet[i - 1]) < 0) {
		tprint('You have lost $' + (wallet[i] - wallet[i - 1]) + ' in the last 5 minutes.');
	} else {
		tprint('No growth or loss has occured.');
	}
	
	sleep(300000);
}