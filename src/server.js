import express from 'express'

const server = express()
const port = 3000

server.get('/index', (req, res) => {
    res.sendFile("/resources/index.html", {root: __dirname})
})

server.get('/*', (req, res) => {
    res.sendFile(req.url, {root: __dirname})
})

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})