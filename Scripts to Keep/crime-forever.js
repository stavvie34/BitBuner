crime = args[0];
sleepLength = 0;

function time(x) {
	time = x / 1000;
}


if (crime === 'shoplift') {
	sleepLength = 3000;
}

if (crime === 'rob store') {
	sleepLength = 62000;
}

if (crime === 'mug someone') {
	sleepLength = 5000;
}

if (crime === 'larceny') {
	sleepLength = 93000;
}

if (crime === 'deal drugs') {
	sleepLength = 12000;
}

if (crime === 'bond forgery') {
	sleepLength = 302000;
}

if (crime === 'traffik illegal arms') {
	sleepLength = 43000;
}

if (crime === 'homicide') {
	sleepLength = 5000;
}

if (crime === 'grand theft auto') {
	sleepLength = 85000;
}

if (crime === 'kidnap and randsom') {
	sleepLength = 122000;
}

if (crime === 'assasinate') {
	sleepLength = 302000;
}

if (crime === 'heist') {
	sleepLength = 603000;
}

print('You have chosen to commit: ' + crime + '.');
print('It will take ' + time(sleepLength)) + 'seconds to commit the crime once.');

while (true) {
	commitCrime(crime);
	sleep(sleepLength);
}