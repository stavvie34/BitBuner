script = args[0];
target = args[1];
scriptRam = getScriptRam('base-target.script', 'home');
totalRam = (getServerRam('home')[0]);
maxThreads = (Math.floor(totalRam / scriptRam));


while (scriptRunning('all-server.script', 'home') === true) {
    sleep(10000);
    print('Sleeping for 10 seconds.');
}

killall('home');
sleep(10000);
exec(script, 'home', maxThreads, target);
tprint(script + ' is now running on home machine with ' + maxThreads + ' threads.');