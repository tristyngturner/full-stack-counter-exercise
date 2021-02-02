var express = require('express');
var app = express();
var counter = 0;
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/api/value', (req, res) => {
    res.json(counter);
})

app.get('/api/increment', (req, res) => {
    counter++;
    res.json(counter);
});

app.get('/api/decrement', (req, res) => {
    counter--;
    res.json(counter);
})

app.get('/api/reset', (req, res) => {
    counter = 0;
    res.json(counter);
})

app.listen(port, function() {
    console.log('listening to port ' + port)
})