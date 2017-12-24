i = getServerMoneyAvailable(args[0]);
if (i > 10000) {
    i = i * 45;
    while(true) {
        if (getServerSecurityLevel(args[0]) > 2) {
            weaken(args[0]);
        } else {
            if (getServerMoneyAvailable(args[0]) >= i) {
                hack(args[0]);
            } else {
                grown = grow(args[0]);
                print('grown x ' + grown);
                if(grown == 1)
                    i = i * 0.99;
            };
        };
    };
};