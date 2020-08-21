var gameball = require('../../lib/gameball')
var Gameball = new gameball()
Gameball.setUp({
    'apiKey':'7c7636658209418c9a82306a421f76a5',
    'transactionKey':'26e1967d89114388bdd1772587c336c8'
});

/* Gameball.createReferral({
    "playerCode": '_6IF971D1A14Mu',
    'playerUniqueId':Date.now()
}, function (err, res){
    if(err) console.log(err)
    else console.log(res)
}) */


Gameball.createReferral({
    "playerCode": 'EDC530AFdTxy1L',
    'playerUniqueId': Date.now(),
    "playerAttributes":{
        displayName: "referral_",
        firstName: "testing",
        lastName:"referral"
    }
}, function (err, res){
    if(err) console.log(err)
    else console.log(res)
})
