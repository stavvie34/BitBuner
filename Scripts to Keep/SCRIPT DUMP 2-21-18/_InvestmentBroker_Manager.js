//--------------------------------------------------------------------------------------------------------------------------
//---------------------------_InvestmentBroker_Manager.script---------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------

COMMISION_FEE = 100000;
INPUT_PORT = 10;

localHost = getHostname();

StockSymbol = args[0];
DATA_PORT = args[1];
HistorySize = args[2];

BuyThreshold = 1 + args[3];
SellThreshold = 1 - args[3];

cash = args[4];

movingAverageHistory = [];

doLoop = true;

while (doLoop)
{
    movingAverage = read(DATA_PORT);
    if (movingAverage === "_L")
    {
		// Liquidate command given, terminate script
        doLoop = false;
        write(INPUT_PORT, "__L " + DATA_PORT);
    }
    else if (movingAverage !== 'NULL PORT DATA')
    {
        movingAverageHistory.push(movingAverage);
        if (movingAverageHistory.length > HistorySize)
        {
            previousMovingAverage = movingAverageHistory.shift();
            if (movingAverage > (previousMovingAverage * BuyThreshold))
            {
				// MA is trending up, buy stocks if cash is available
                additionalCost = 0;
                prevStockData = getStockPosition(StockSymbol);
                stockPrice = getStockPrice(StockSymbol);
                if (cash > stockPrice + COMMISION_FEE)
                {
					// Calculate amount of stocks to purchase
                    newShares = Math.floor((cash - additionalCost - COMMISION_FEE) / stockPrice);
                    while (!buyStock(StockSymbol, newShares) && newShares > 0)
                    {
						// We failed to buy stocks, adjust cash and retry
                        availableCash = getServerMoneyAvailable("home");
                        if (availableCash < cash)
                        {
							// Less cash is available then should be (can happen due to purchase/sell orders happening at a different price then we measured or simply because the user spent the money on something)
							// Adjust cost to account for discrepency (I'm adjusting the cose instead of the available cash to reflect the missing cash in the broker script)
                            additionalCost += (cash - availableCash);
                        }
						// Recalculate amount of stocks to purchase
                        newShares = Math.floor((cash - additionalCost - COMMISION_FEE) / getStockPrice(StockSymbol));
                    }
                    if (newShares > 0)
                    {
                        stockData = getStockPosition(StockSymbol);
                        if (prevStockData[0] === 0)
                        {
                            cost = (COMMISION_FEE + (newShares * stockData[1]));
                        }
                        else
                        {
                            cost = COMMISION_FEE + ((stockData[1] * stockData[0]) - (prevStockData[1] * prevStockData[0]));
                        }
                        cost += additionalCost;
                        cash -= cost;
						// Send transaction data to broker
                        write(INPUT_PORT, "_Sb " + DATA_PORT + " " + cost);
                    }
                }
            }
            if (movingAverage < (previousMovingAverage * SellThreshold))
            {
				// MA is trending down, sell stocks if it's profitable
                stockData = getStockPosition(StockSymbol);
                stockPrice = getStockPrice(StockSymbol);
                profit = stockData[0] * (stockPrice - stockData[1]);
                if (profit > COMMISION_FEE * 2)
                {
                    sellStock(StockSymbol, stockData[0]);
                    stockPrice = getStockPrice(StockSymbol);
                    income = (stockData[0] * stockPrice) - COMMISION_FEE; 
                    cash += income;
					// Send transaction data to broker
                    write(INPUT_PORT, "_Ss " + DATA_PORT + " " + income);
                }
            }
        }
    }
}