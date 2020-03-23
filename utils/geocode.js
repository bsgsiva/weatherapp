var request = require('request')



var forecast = (latitude, longitude, callback) =>{
    debugger
    var geoUrl = 'https://api.darksky.net/forecast/9ef0ac2b88f4f947be327caa959f52a1/' + latitude + ',' + longitude
    request({url:geoUrl, json:true}, (error,response)=> {

         if(error){
             callback('No internet connection', undefined)

         }else if(response.body.error){
             callback('Forecast not available try again', undefined)

         }else{
             callback(undefined, response.body.daily.summary)
         }
        })

        
}

module.exports = forecast