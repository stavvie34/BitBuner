target = args[0];

function commas(x) {
  return x.toLocaleString();
}

// preMoney = 0;
money = commas(getServerMoneyAvailable(target));
// postMoney = 0;

while (true) {
    tprint(target + ' currently has $' + money + ' available.');
    sleep(30000);
    money = commas(getServerMoneyAvailable(target));
    /*
    if (preMoney === 0) {
        tprint('This was the initialization.');
    } else {
        takeAway = 0;
        if (takeAway === 0) {
            tprint('There has not been any change in cash.');
            takeAway = commas(money - preMoney);
        } else {
            takeAway = commas(money - preMoney);
            tprint('In the past 30 seconds, ' + target + ' has grown by $' + takeAway + '.');
        }
    }
    preMoney = commas(getServerMoneyAvailable(target));
    */
}