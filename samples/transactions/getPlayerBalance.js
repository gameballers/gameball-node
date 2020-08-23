var gameball = require('../../lib/gameball')
var Gameball = new gameball()
Gameball.setUp({
    'apiKey':'7c7636658209418c9a82306a421f76a5',
    'transactionKey':'26e1967d89114388bdd1772587c336c8'
});

Gameball.getPlayerBalance({
    'playerUniqueId': '1597612880455'
}, function (err, res){if(err){
    console.log(err)
}
else{
    console.log(res)
}})