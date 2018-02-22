//--------------------------------------------------------------------------------------------------------------------------
//---------------------------_InvestmentBroker_Data.script------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------

StockSymbol = args[0];
DATA_PORT = args[1];
MovingAverageSize = args[1];

prices = [];
sum = 0;
lastPrice = -1;

while(true)
{
    price = getStockPrice(StockSymbol);
    if (price != lastPrice)
    {
        prices.push(price);
        sum += price;
        if (prices.length > MovingAverageSize)
        {
            sum -= prices.shift();
            avg = sum/MovingAverageSize;
            write(DATA_PORT, avg);
        }
        lastPrice = price;
    }
}