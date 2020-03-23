const request = require('request')

const geocode2 = (address, callback) => {
    debugger
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYnNnc2l2YSIsImEiOiJjazd3NXc1bzgwMGNsM2xtamNlb2ViMTgwIn0.IuMd-QD9cSQ6uRuedWBUNg'

    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude:  body.features[0].center[0],
                longitude:  body.features[0].center[1],
                location:  body.features[0].place_name
            })
        }
    })
}

module.exports = geocode2