//List of host servers ----- only 2 ports
hosts = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'CSEC', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'avmnite-02h', 'crush-fitness', 'johnson-ortho', 'the-hub'];


//scan through list of hosts
while(true) {
    for (i = 0; i < hosts.length; i = i + 1) {
        host = hosts[i];
        tprint('Working on' + host);
		svrHackLvl = getServerRequiredHackingLevel((host));
		
		tprint(svrHackLvl);
	}
	i++;
}

tprint("DONE!!!");