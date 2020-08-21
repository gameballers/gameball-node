var gameball = require('../../lib/gameball')
var Gameball = new gameball()
Gameball.setUp({
    'apiKey':'7c7636658209418c9a82306a421f76a5',
    'transactionKey':'26e1967d89114388bdd1772587c336c8'
});

Gameball.redeemPoints({
    "playerUniqueId":"1597612880455",
    "holdReference":'e620b471-93dd-4456-bf8c-68708d71de20',
    "transactionId": "redeemTransID1"
},function (err, res){
    if(err) console.log(err)
    else console.log(res)
})