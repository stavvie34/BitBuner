//RAM FINDER

Srvs = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'crush-fitness', 'johnson-ortho', 'the-hub', 'comptek', 'netlink', 'rothman-uni', 'catalyst', 'summit-uni', 'rho-construction', 'millenium-fitness', 'aevum-police', 'alpha-ent', 'syscore', 'lexo-corp', 'snap-fitness', 'global-pharm', 'applied-energetics', 'unitalife', 'nova-med', 'zb-def', 'zb-institute', 'vitalife', 'titan-labs', 'solaris', 'microdyne', 'helios', 'deltaone', 'icarus', 'omnia', 'defcomm', 'galactic-cyber', 'infocomm', 'taiyang-digital', 'stormtech', 'aerocorp', 'clarkeinc', 'omnitek', '4sigma', 'blade', 'b-and-a', 'ecorp', 'fulcrumtech', 'megacorp', 'kuai-gong', 'fulcrumassets', 'powerhouse-fitness'];

eligible = [];

tprint('/////////////////////////////////////////////////////');
tprint('-----     Creating list of eligible servers     -----');
tprint('/////////////////////////////////////////////////////');



for (i = 0; i < Srvs.length; i = i +1) {
	currentSrv = Srvs[i];
	srvRam = (getServerRam(currentSrv));
	
	if (((srvRam[0]) > 16.00) === true) {
		eligible.push(currentSrv);
	}
}


tprint(' ');
tprint(' ');
tprint('////////////////////////////////////////////');
tprint('-----     List of eligible servers     -----');
tprint('////////////////////////////////////////////');
tprint(' ');
tprint(eligible);
tprint(' ');
tprint('-----     *** DONE! ***     -----');