var gameball = require('../../lib/gameball')
var Gameball = new gameball('7c7636658209418c9a82306a421f76a5')
Gameball.setUp({
    'transactionKey':'26e1967d89114388bdd1772587c336c8'
});


Gameball.getPlayerInfo({
    "playerUniqueId":"1597612880455"
},function (err, res){
    if(err) console.log(err)
    else console.log(res)
})