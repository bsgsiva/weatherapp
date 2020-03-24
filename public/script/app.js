console.log('I came from node.js app') 

//var url='https://api.mapbox.com/geocoding/v5/mapbox.places/Boston.json?access_token=pk.eyJ1IjoiYnNnc2l2YSIsImEiOiJjazd3NXc1bzgwMGNsM2xtamNlb2ViMTgwIn0.IuMd-QD9cSQ6uRuedWBUNg'



var weatherForm = document.querySelector('form')
var querytoprint = document.querySelector('#message')
//var search = document.querySelector('ínput')
var search = document.querySelector('input')
weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
      var location = search.value
       querytoprint.textContent="...Loading Please Wait"
    fetch('http://localhost:3000/Products?address=' + location).then( (response)=>{
    response.json().then((data)=>{
          if(data.error){
              querytoprint.textContent= data.error
              console.log(data.error)
          }
          else{
              querytoprint.textContent= data.location + ' ' + data.forecast
              console.log(data.location)
              console.log(data.forecast)
          }
    })
     
    
})
})
// console.log('Client side javascript file is loaded!')
 
// const weatherForm = document.querySelector('form')
// const search = document.querySelector('input')

// weatherForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const location = search.value

//     fetch('http://localhost:3000/weather?address=' + location).then((response) => {
//         response.json().then((data) => {
//             if (data.error) {
//                 console.log(data.error)
//             } else {
//                 console.log(data.location)
//                 console.log(data.forecast)
//             }
//         })
//     })
// })
