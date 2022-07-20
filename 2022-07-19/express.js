const express = require('express')
const app = express()
const port = 3000
const os = require("node:os");

app.get('/', (req, res) => {
    res.send(os.cpus()[0])
})
app.get('/cpu', (req, res) => {
    res.send(os.cpus()[0].model)
    res.send(os.cpus()[0].speed)
})
app.get('/os', (req, res) => {
    res.send(os.type())
})
app.get('/ram', (req, res) => {
    let bytesToMegabytes = (os.totalmem()) / (1024 * 1024);
    // res.send('Total megabytes')
    // res.send([bytesToMegabytes])
    res.send([{Megabytes: [bytesToMegabytes]},])
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})