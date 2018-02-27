// crime = args[0];
time = 0;
crime = "";

disableLog('crime');

if (args.length < 2) {
    crime = args[0];
} else {
    crime = args[0] + ' ' + args[1];
}

if (crime === 'shoplift') {
    time = 2000;
}

if (crime === 'mug someone') {
    time = 4000;
}

if (crime === 'larceny') {
	time = 90000;
}

print('Crime = ' + crime + '.');
print('Time = ' + time + '.');


sleep(1000);

for (i = 0; i < 100000000000; i++) {
	commitCrime(crime);
	sleep(time);
	print('You have committed the crime ' + (i + 1) + ' times. Go you.');
	print('You have earned ' + getScriptIncome('commitCrime.script', 'home', crime));
}