reputation = 0;
stats = getStats();

function commas(x) {
	return x.toLocaleString();
}

function text(statement) {
	print('-----------------------------------------------------------------');
	print(statement);
	print('-----------------------------------------------------------------');
}


/////////////////////////////////////////////
// FIRST PROMOTION - Junior Software Engineer
/////////////////////////////////////////////


text('Applying with Megacorp...');
applyToCompany('MegaCorp', 'software');
text('Successfully got a job with MegaCorp in Software!');
text('Working for Megacorp...');

// Waiting for promotion rep requirement
while (reputation < 8000) {
	difference = 8000 - reputation;
	workForCompany();
	sleep(30000);
	reputation = getCompanyRep('MegaCorp');
	text('You still need ' + commas(difference) + ' reputation to get promoted.');
}

// Check promotion hacking level requirement
while (stats.hacking < 300) {
	difference = 300 - stats.hacking;
	sleep(30000);
	stats = getStats();
	text('You still need ' + difference + ' more hacking levels to get promoted.');
}

text('Applying for promotion...');
if ((applyToCompany('MegaCorp', 'software')) === true) {
	text('You have been promoted!');
} else {
	text('You did not satisfy the requirements for a promotion...');
}


//////////////////////////////////////////////
// SECOND PROMOTION - Senior Software Engineer
//////////////////////////////////////////////


// Waiting for promotion rep requirement
while (reputation < 40000) {
	difference = 40000 - reputation;
	workForCompany();
	sleep(30000);
	reputation = getCompanyRep('MegaCorp');
	text('You still need ' + commas(difference) + ' reputation to get promoted.');
}

// Check promotion hacking level requirement
while (stats.hacking < 500) {
	difference = 500 - stats.hacking;
	sleep(30000);
	stats = getStats();
	text('You still need ' + difference + ' more hacking levels to get promoted.');
}

// Check promotion charisma level requirement
while (stats.charisma < 300) {
	difference = 300 - stats.charisma;
	universityCourse('Rothman University', 'Leadership');
	sleep(30000);
	stats = getStats();
	text('You still need ' + difference + ' more charisma levels to get promoted.');
}

text('Applying for promotion...');
if ((applyToCompany('MegaCorp', 'software')) === true) {
	text('You have been promoted!');
} else {
	text('You did not satisfy the requirements for a promotion...');
}


////////////////////////////////////////////
// THIRD PROMOTION - Lead Software Developer
////////////////////////////////////////////


// Waiting for promotion rep requirement
while (reputation < 200000) {
	difference = 200000 - reputation;
	workForCompany();
	sleep(30000);
	reputation = getCompanyRep('MegaCorp');
	text('You still need ' + commas(difference) + ' reputation to get promoted.');
}

// Check promotion hacking level requirement
while (stats.hacking < 650) {
	difference = 650 - stats.hacking;
	sleep(30000);
	stats = getStats();
	text('You still need ' + difference + ' more hacking levels to get promoted.');
}

// Check promotion charisma level requirement
while (stats.charisma < 400) {
	difference = 400 - stats.charisma;
	universityCourse('Rothman University', 'Leadership');
	sleep(30000);
	stats = getStats();
	text('You still need ' + difference + ' more charisma levels to get promoted.');
}

text('Applying for promotion...');
if ((applyToCompany('MegaCorp', 'software')) === true) {
	text('You have been promoted!');
} else {
	text('You did not satisfy the requirements for a promotion...');
}


///////////////////
// FOURTH PROMOTION
///////////////////


// Waiting for promotion rep requirement
while (reputation < 400000) {
	difference = 400000 - reputation;
	workForCompany();
	sleep(30000);
	reputation = getCompanyRep('MegaCorp');
	text('You still need ' + commas(difference) + ' reputation to get promoted.');
}

// Check promotion hacking level requirement
while (stats.hacking < 750) {
	difference = 750 - stats.hacking;
	sleep(30000);
	stats = getStats();
	text('You still need ' + difference + ' more hacking levels to get promoted.');
}

// Check promotion charisma level requirement
while (stats.charisma < 500) {
	difference = 500 - stats.charisma;
	universityCourse('Rothman University', 'Leadership');
	sleep(30000);
	stats = getStats();
	text('You still need ' + difference + ' more charisma levels to get promoted.');
}

text('Applying for promotion...');
if ((applyToCompany('MegaCorp', 'software')) === true) {
	text('You have been promoted!');
} else {
	text('You did not satisfy the requirements for a promotion...');
}

workForCompany();