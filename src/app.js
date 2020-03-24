var express = require('express')
var app = express()
const geocode = require('../utils/getcode2')
const forecast = require('../utils/geocode.js')
var path = require('path')
console.log(path.join(__dirname, '../public'))
var publicDirectoryPath = path.join(__dirname, '../public')
var viewsPath =path.join(__dirname, '../templates/views')
var hbs = require('hbs')
app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
// app.get('/help',(req, res)=>{
//     res.send('<html>Your help is  here. <br/> This is a weather app for forcast.</html>')
// })
var partialPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialPath)

// app.get(' ', (req, res)=> {
//     res.render('index' , {
//         title: 'Hello BSG Welcome to Weather app '
//     })
// })
const port = process.env.PORT || 3000
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/help',(req, res)=>{
    res.render('help', {
        help: 'Please contat the weather app people'
    })
})
app.get('/Products', (req, res)=>{
    debugger;
    if(!req.query.address){
        return res.send({
            error:'You must give address man!'
        })
    }
    else{
        var address = req.query.address
         
        geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
                if(error)
                {
                   return res.send({error})
                }
                forecast(latitude, longitude, (error, forecastData) => {
                    if (error) {
                        return res.send({ error })
                    }
        
                    res.send({
                        forecast: forecastData,
                        location,
                        address: req.query.address
                    })
                })
            })
               
        }
    })
        
       
   

app.get('/About', (req,res)=>{
    res.send([{
        'Forecast' :'cloudy',
        'Temperature': 50,
        'location': 'Philadephilla'

    },{
        'Forecast' :'sunny',
        'Temperature': 50
    }
])
})
app.get('/help/*', (req, res)=>{

    res.render ('404', {
        error: 'PAGE IS  UNDER CONSTRUCTION. THANKS FOR YOUR PATIENCE.'
    })
})
app.get('*', (req, res)=>{

    res.render ('404', {
        error: 'PAGE IS NOT FOUND.'
    })
})

app.listen (port , ()=>{
    console.log('app is listening man' + port)
})