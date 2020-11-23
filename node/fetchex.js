//

fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random") //place in URL
.then(response=>response.json())
.then(data=>{
    console.log(data) //do whatever with data
})