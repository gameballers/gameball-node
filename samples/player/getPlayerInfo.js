var gameball = require('../../lib/gameball')
var Gameball = new gameball('7c7636658209418c9a82306a421f76a5')
Gameball.setUp({
    'transactionKey':'your_transaction_key'
});


Gameball.getPlayerInfo({
    "playerUniqueId":'player_unique_id'
},function (err, res){
    if(err) console.log(err)
    else console.log(res)
})