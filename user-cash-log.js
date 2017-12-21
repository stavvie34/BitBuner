//Logs the user's cash every 5 minutes. Good way to keep track of cashflow progress

tprint('////////////////////////////////////////');
tprint('---------- Logging user money ----------');
tprint('////////////////////////////////////////');

wallet = [];

for (i =0; i < 1000; i = i + 1) {
	
	wallet.push(getServerMoneyAvailable('home'));
	
	tprint('------------------------------');
	tprint('You have $' + wallet[i]);
	tprint('------------------------------');
	
	if ((wallet[i] - wallet[i - 1]) > 0) {
		tprint('You have gained $' + (wallet[i] - wallet[i - 1]) + ' in the last 10 seconds.');
	} else if ((wallet[i] - wallet[i - 1]) < 0) {
		tprint('You have lost $' + (wallet[i] - wallet[i - 1]) + ' in the last 10 seconds.');
	} else {
		tprint('No growth or loss has occured.');
	}
	
	sleep(10000);
}