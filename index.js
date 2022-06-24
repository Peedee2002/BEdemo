// 1: what??? -> ES5
var express = require('express');
const { MongoClient } = require('mongodb');

// magic
var app = express();

// more magic
app.use(express.json()) // for parsing application/json

app.get('/', (req, res) => {
    // simple get
    res.send("hi!");
})

app.get('/whenDoWeWantIt', (req, res) => {
    // get with query params
    if (req.query.password) {
        res.send((req.query.password == 'saysame') ? "cool!": "go away"); // sorta like return
    }
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

// set up mongo
// -> package.json
// -> docker-compose
// docker compose up
// studio 3t

client = new MongoClient("mongodb://user:user@localhost:27017");

client.connect();
// databases inside connection
const db = client.db('groupr');
// multiple collections possible
const users = db.collection('user');

app.post('/addUser', (req, res) => {
    users.insertOne(req.body);
    res.send("done!");
})

app.get("/getUsers", async (req, res) => {
    res.send(await users.find().toArray())
})
// IMPORTANT
app.listen(8000);
