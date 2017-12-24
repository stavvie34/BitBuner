i = 0;
while(i < 25) {
    if (getServerMoneyAvailable("home") > 51200000) {
        purchaseServer("server-" + i, 1024);
        
        //exec("early-hack-template.script", hostname, 1, "joesguns", 1000000000, 10);
        ++i;
    }
}