hosts = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'CSEC', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'avmnite-02h', 'crush-fitness', 'johnson-ortho', 'the-hub'];

for (i = 0; i < hosts.length; i = i + 1) {
    host = hosts[i];
    serverRam = getServerRam(host);
    
    tprint('There is ' + serverRam[0] + 'GB of RAM on ' + host);
}

for (j = 0; j < hosts.length; j = j + 1) {
    host = hosts[j];
    server = getServerRam(host);
    
    tprint('There is ' + serverRam[0] + 'GB of RAM on ' + host);
}