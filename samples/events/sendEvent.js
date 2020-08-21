var gameball = require('../../lib/gameball')
var Gameball = new gameball()
Gameball.setUp({
    'apiKey':'7c7636658209418c9a82306a421f76a5',
    'transactionKey':'26e1967d89114388bdd1772587c336c8'
});

/* Gameball.sendEvent({
    "events":{
        "Buy":{}
        },
    "playerUniqueId":'1596487841748'
},function (err, res){
    if(err) console.log(err)
    else console.log(res)
}) */

 /* Gameball.sendEvent(
    {
    'playerUniqueId': '1596487841748',
    'events':{
            "place_order":{
                    "total_price":2000
             },
             "view_product_page":{},
             "Buy":{}
     }
},function (err, res){
    if(err) console.log(err)
    else console.log(res)
}) */

/* Gameball.sendEvent(
    {
       "events":{
          "place_order":{
             "total_amount":"100",
             "category":[
                "electronics",
                "cosmetics"
             ]
          },
          "review":{}
       },
       "playerUniqueId":"1597612880455"
    },
    function (err, res){
        if(err) console.log(err)
        else console.log(res)
    }) */

/* Gameball.sendEvent(
    {
       "events":{
          "reserve":{
             "rooms":2
          }
       },
       "playerUniqueId":"1597612880455",
       "playerAttributes":{
          "displayName":"Jon Snow",
          "email":"jon.snow@example.com",
          "dateOfBirth":"1980-09-19T00:00:00.000Z",
          "joinDate":"2019-09-19T21:06:29.158Z",
          "custom":{
              'isGraduated': true
          }
       }
    },
    function (err, res){
        if(err) console.log(err)
        else console.log(res)
    }) */


Gameball.sendEvent(
    {"events":{
            "view_product_page":{}
            },
    "playerUniqueId": '1597612880455',
    "isMessageTrigger": true
  
     
},function (err, res){
    if(err) console.log(err)
    else console.log(res)
}) 