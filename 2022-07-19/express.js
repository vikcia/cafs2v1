const express = require('express')
const app = express()
const port = 3000
const os = require("node:os");

app.get('/', (req, res) => {
    res.send(os.cpus()[0])
})
app.get('/cpu', (req, res) => {
    let cpusModel = os.cpus()[0].model;
    let cpusSpeed = os.cpus()[0].speed;
    let getModelSpeed = 'Model: '+ cpusModel + ' Speed:'+ cpusSpeed;
    res.send(getModelSpeed)
})
app.get('/os', (req, res) => {
    res.send(os.type())
})
app.get('/ram', (req, res) => {
    let bytesToMegabytes = (os.totalmem()) / (1024 * 1024);
    let numberToFixed = bytesToMegabytes.toFixed(0);
    res.send([{Megabytes: [numberToFixed,'MB']},])
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})