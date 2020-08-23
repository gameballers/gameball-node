var gameball = require('../../lib/gameball')
var Gameball = new gameball()
Gameball.setUp({
    'apiKey':'your_api_key',
    'transactionKey':'your_transaction_key'
});

Gameball.createCoupon({
    "playerUniqueId":"1597612880455",
    "code": "1",
    "value":1000.0
},function (err, res){
    if(err) console.log(err)
    else console.log(res)
})