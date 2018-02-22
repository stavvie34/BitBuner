servers = ['server-0', 'server-1', 'server-2', 'server-3', 'server-4', 'server-5', 'server-6', 'server-7', 'server-8', 'server-9', 'server-10', 'server-11', 'server-12', 'server-13', 'server-14', 'server-15', 'server-16', 'server-17', 'server-18', 'server-19', 'server-20', 'server-21', 'server-22', 'server-23', 'server-24'];
target = args[0];

i = 0;
while(i < 25) {
    if (getServerMoneyAvailable("home") > 51200000) {
        purchaseServer("server-" + i, 1024);
        
        //exec("early-hack-template.script", hostname, 1, "joesguns", 1000000000, 10);
        ++i;
    }
}

for (j = 0; j < servers.length; j = j + 1) {
    currentServer = servers[j];
    
    scp('RemoteGrow.script', 'home', currentServer);
    scp('RemoteHack.script', 'home', currentServer);
    scp('RemoteWeaken.script', 'home', currentServer);
    scp('shit.script', 'home', currentServer);
    
    exec('shit.script', currentServer, 1, currentServer, target);
    
    print('Ya got shit runnin on ' + currentServer + ' yo.');
}

print('Bruh the script is done.');