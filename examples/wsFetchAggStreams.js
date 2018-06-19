const Binance = require('./index');

(async function () {

    let options = {
        streamName: 'zilbtc@aggTrade'       // put your interested currency
    };

    try{
        await Binance.setParams(options);

    }catch (e) {
        console.log("Error! " +e);
    }


})();


/* sample result

{
    "e": "aggTrade",  // Event type
    "E": 123456789,   // Event time
    "s": "BNBBTC",    // Symbol
    "a": 12345,       // Aggregate trade ID
    "p": "0.001",     // Price
    "q": "100",       // Quantity
    "f": 100,         // First trade ID
    "l": 105,         // Last trade ID
    "T": 123456785,   // Trade time
    "m": true,        // Is the buyer the market maker?
    "M": true         // Ignore.
}

*/