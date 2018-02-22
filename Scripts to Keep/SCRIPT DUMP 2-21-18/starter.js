script = args[0];

sleep(1500);
scp(script, 'foodnstuff');
tprint(script + ' copied to foodnstuff.');
nuke('foodnstuff');
tprint('Root access to foodnstuff gained.');
exec(script, 'foodnstuff', 1);
tprint(script + ' has been executed.');
tprint('---DONE!---');