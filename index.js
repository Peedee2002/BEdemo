// 1: what??? -> ES5
var express = require('express')

// magic
var app = express()

// more magic
app.use(express.json()) // for parsing application/json

app.get('/', (req, res) => {
    // simple get
    res.send("hi!");
})

app.get('/whenDoWeWantIt', (req, res) => {
    // get with query params
    res.send(req.query.time);
})

app.get('/echo/:item', (req, res) => {
    // get with request params
    res.send(req.params.item);
})


app.get('/why', (req, res) => {
    // get with json response
    res.send({why: 'I said so'});
})


app.post('/myLife', (req, res) => {
    // post with json
    res.send(req.body.myLife);
})
// IMPORTANT
app.listen(3000);
