var gameball = require('../../lib/gameball')
var Gameball = new gameball()
Gameball.setUp({
    'apiKey':'7c7636658209418c9a82306a421f76a5',
    'transactionKey':'26e1967d89114388bdd1772587c336c8'
});

Gameball.initializePlayer({
     'playerUniqueId': ''+Date.now(),
     'playerAttributes': {
            'displayName': 'Mariam',
            'firstName': 'Mariam',
            'lastName': 'Heikal',
            'email': 'test@gmail.com',
            'gender': 'Female',
            'mobileNumber': '01223334444',
            'dateOfBirth': '1998-09-25T12:19:42.593Z',
            'custom':{
                   'isGraduated': false,
                   'location': 'Cairo, Egypt'
            }
          }
     }, function (err, res){if(err){
            console.log(err)
    }})


/* Gameball.initializePlayer(
{
       'playerUniqueId': ''+Date.now(),
       'deviceToken': "deviceToken",
       "osType": "osType",
       "isDeleted": true,
       "playerAttributes": {
              "displayName": "Mariam",
              "firstName": "Mariam",
              "lastName": "Heikal",
              "email": "test@gmail.com",
              "gender": "Female",
              "mobileNumber": "01223334444",
              "dateOfBirth": "1998-08-10T22:46:27.763Z",
              "joinDate": ""+new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString(),
              "custom": {
              "isGraduated": false,
              "location": "Egypt, Cairo"
              }
       }
}, function (err, res){if(err){
            console.log(err)
    }})

     */