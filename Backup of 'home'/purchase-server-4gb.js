i = 0;
while(i < 25) {
    if (getServerMoneyAvailable("home") > 200000) {
        hostname = purchaseServer("pserv-" + i, 4);
        scp("early-hack-template.script", hostname);
        exec("early-hack-template.script", hostname, 1, "joesguns", 1000000000, 10);
        ++i;
    }
}