const increment = document.getElementById('increment')
// const $number = $("#number");
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');

increment.addEventListener("click", (event) => {
    event.preventDefault();
    axios.get('/api/increment').then(function(response) {
        console.log(response);
        document.getElementById('number').innerHTML = response.data;
    })
   
})

decrement.addEventListener("click", (event) => {
    event.preventDefault();
    axios.get('/api/decrement').then(function(response) {
        console.log(response);
        document.getElementById('number').innerHTML = response.data;
    })
   
})

reset.addEventListener("click", (event) => {
    event.preventDefault();
    axios.get('/api/reset').then(function(response) {
        console.log(response);
        document.getElementById('number').innerHTML = response.data;
    })
   
})