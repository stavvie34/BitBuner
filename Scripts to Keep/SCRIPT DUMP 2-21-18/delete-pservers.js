purchasedServers = ['server-0', 'server-1', 'server-2', 'server-3', 'server-4', 'server-5', 'server-6', 'server-7', 'server-8', 'server-9', 'server-10', 'server-11', 'server-12', 'server-13', 'server-14', 'server-15', 'server-16', 'server-17', 'server-18', 'server-19', 'server-20', 'server-21', 'server-22', 'server-23', 'server-24'];

for (i = 0; i < purchasedServers.length; i = i + 1) {
    currentPurchasedServer = purchasedServers[i];

    killall(currentPurchasedServer);
    tprint('Killing all scripts on ' + currentPurchasedServer + '.');
    sleep(5000);
    deleteServer(currentPurchasedServer);
    tprint(currentPurchasedServer + ' has been deleted.');
}

tprint('Finished deleting purchased servers.');