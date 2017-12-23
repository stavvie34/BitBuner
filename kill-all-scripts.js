//Used to kill all scripts on all non-faction servers and purchased servers.

svrs = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'crush-fitness', 'johnson-ortho', 'the-hub', 'comptek', 'netlink', 'rothman-uni', 'catalyst', 'summit-uni', 'rho-construction', 'millenium-fitness', 'aevum-police', 'alpha-ent', 'syscore', 'lexo-corp', 'snap-fitness', 'global-pharm', 'applied-energetics', 'unitalife', 'nova-med', 'zb-def', 'zb-institute', 'vitalife', 'titan-labs', 'solaris', 'microdyne', 'helios', 'deltaone', 'icarus', 'omnia', 'defcomm', 'galactic-cyber', 'infocomm', 'taiyang-digital', 'stormtech', 'aerocorp', 'clarkeinc', 'omnitek', '4sigma', 'blade', 'b-and-a', 'ecorp', 'fulcrumtech', 'megacorp', 'kuai-gong', 'fulcrumassets', 'powerhouse-fitness'];

pSvrs = ['server-0', 'server-1', 'server-2', 'server-3', 'server-4', 'server-5', 'server-6', 'server-7', 'server-8', 'server-9', 'server-10', 'server-11', 'server-12', 'server-13', 'server-14', 'server-15', 'server-16', 'server-17', 'server-18', 'server-19', 'server-20', 'server-21', 'server-22', 'server-23', 'server-24'];


tprint('///////////////////////////////////////////////');
tprint('     Killing all scripts on all servers...     ');
tprint('///////////////////////////////////////////////');

/*
//Kill all scripts on all servers.
for (i = 0; i < svrs.length; i = i +1) {
	//currentSvr = svrs[i];
	
	killall(svrs[i]);
}
*/



//Kill all scripts on all purchased servers.
for (i = 0; i < pSvrs.length; i = i +1) {
	//currentPSvr = Psvrs[i];
	
	killall(pSvrs[i]);
}


tprint('////////////////////////////////////////////////////////');
tprint('     All scripts on all servers successfully killed     ');
tprint('////////////////////////////////////////////////////////');

tprint('                         DONE!                          ');



//!*!*!* If you want to kill this script, along with all others on your home server, comment in the next line.
//killall('home');