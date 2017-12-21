Srvs = ['server0', 'server1', 'server2', 'server3', 'server4', 'server5', 'server6', 'server7', 'server8', 'server9', 'server10', 'server11', 'server12', 'server13', 'server14', 'server15', 'server16', 'server17', 'server18', 'server19', 'server20', 'server21', 'server22', 'server23', 'server24'];

tprint('///////////////////////////////////////////////////////////');
tprint('---------- Killing all scripts on purchased servers ----------');
tprint('///////////////////////////////////////////////////////////');


//Remember to change script name to desired kill script(s)
while((scriptRunning('main-server.script', 'server24')) === true) {
    for (i = 0; i < Srvs.length; i = i + 1) {
        currentSrv = Srvs[i];
        
        killall(currentSrv);
        
        if ((scriptRunning('main-server.script', currentSrv)) === false) {
            tprint('Script has been killed on ' + currentSrv);
        }
    }
}

tprint('///////////////////////////////////////////////////');
tprint('----- All scripts have been killed on purchased servers -----');
tprint('///////////////////////////////////////////////////');

/////Need to fix the loooooooop