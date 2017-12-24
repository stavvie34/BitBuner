while (true) {
    scriptName = args[0];
    hostName = args[1];
    argument = args[2];
    
    scriptIncome = getScriptIncome(scriptName, hostName, argument);
    
    tprint('------------------------------');
    tprint(scriptName + 'income = ' + scriptIncome);
    sleep()
}



getScriptIncome([scriptname], [hostname/ip], [args...])