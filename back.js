const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const url = "mongodb+srv://aj9045j:joshi9045@cluster0.f0cclbu.mongodb.net/login";
mongoose.set('strictQuery', false);
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (err) console.log("errorr");
    else console.log("connected to mongo")
});
const peoplesch = new mongoose.Schema({
    name: String,
    date: String
});
const people = mongoose.model('people', peoplesch);
app.use('/css', express.static('css'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/code', (req, res) => {
    res.sendFile(__dirname + '/code.html');
})
app.post('/', (req, res) => {
    let time = new Date();
    let da = `${time.getDate()}/${time.getMonth() + 1},${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

    var pep = people({
        name: req.body.nam,
        date: da,

    })
    pep.save();
    res.redirect('/code')
})
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);