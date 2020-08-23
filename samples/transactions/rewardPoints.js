var gameball = require('../../lib/gameball')
var Gameball = new gameball()
Gameball.setUp({
    'apiKey':'7c7636658209418c9a82306a421f76a5',
    'transactionKey':'26e1967d89114388bdd1772587c336c8'
});

Gameball.rewardPoints({
    "playerUniqueId":"1597184523820",
    "transactionId": "rewardTrans6",
    "amount":5000

    },function (err, res){
    if(err) console.log(err)
    else console.log(res)
})

/* Gameball.rewardPoints({

        "playerUniqueId":"1597612880455",
        "transactionId":"transaction199",
        "amount":2500,
        "playerAttributes":{
           "displayName":"Mariam",
           "firstName":"Mariam",
           "lastName":"Heikal",
           "email":"test@gmail.com",
           "gender":"Female",
           "dateOfBirth":"1998-08-11T00:00:00.000Z",
           "custom":{
              "location":"Cairo, Egypt",
              "graduationDate":"2022-07-04T21:06:29.158Z",
              "isGraduated":false
           }
        }
     },function (err, res){
    if(err) console.log(err)
    else console.log(res)
}) */