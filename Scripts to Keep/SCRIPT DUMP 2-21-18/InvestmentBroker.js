//--------------------------------------------------------------------------------------------------------------------------
//---------------------------InvestmentBroker.script------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------

// Clear database
write("_Investment_DB.txt","","w");

// Clean ports
for (portId = 1; portId <= 10; portId++)
{
    inputCommand = ""
    while (inputCommand !== 'NULL PORT DATA')
    {
        print(inputCommand);
        inputCommand = read(portId);
    }
}

run("_InvestmentBroker.script", 1);