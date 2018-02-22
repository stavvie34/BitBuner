servers = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'hong-fang-tea', 'harakiri-sushi', 'iron-gym', 'neo-net', 'nectar-net', 'zer0', 'max-hardware', 'silver-helix', 'phantasy', 'omega-net','rothman-uni', 'comptek', 'johnson-ortho', 'server-0', 'server-1', 'server-2', 'server-3', 'server-4', 'server-5' ,'server-6', 'server-7', 'server-8', 'server-9', 'server-10'];
script = 'base-target.script';
scriptRam = getScriptRam('base-target.script', 'home');
target = args[0];


for (i = 0; i < servers.length; i = i + 1) {
    currentServer = servers[i];
    
    killall(currentServer);
    sleep(8000);
    
    
    totalRam = (getServerRam(currentServer)[0]);
    maxThreads = (Math.floor((totalRam) / (scriptRam)));
    
    
    scp(script, 'home', currentServer);
    exec(script, currentServer, maxThreads, target);
    
    tprint('Done working on ' + currentServer);
}

tprint('Bruh that shit is done.');