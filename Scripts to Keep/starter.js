script = args[0];
extraArg = args[1];

sleep(1500);
scp(script, 'foodnstuff');
tprint(script + ' copied to foodnstuff.');
nuke('foodnstuff');
tprint('Root access to foodnstuff gained.');
if (extraArg !== undefined) {
	exec(script, 'foodnstuff', 1, extraArgs);
} else {
	exec(script, 'foodnstuff', 1);
}

tprint(script + ' has been executed.');
tprint('---DONE!---');