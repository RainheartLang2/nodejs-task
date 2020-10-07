import express from 'express'
import bodyParser from 'body-parser'
import {validateMail, validateName, validatePassword, validatePhone} from "./common/ValidationUtils";
const server = express()
const port = 3000

server.use(bodyParser.json());

server.get('/index', (req, res) => {
    res.sendFile("/resources/index.html", {root: __dirname})
})

server.get('/*', (req, res) => {
    res.sendFile(req.url, {root: __dirname})
})

server.post("/save", (req, res) => {
    const validated = validateName(req.body.name)
        && validateMail(req.body.mail)
        && validatePhone(req.body.phone)
        && validatePassword(req.body.password)
    if (!validated) {
        res.status(200).send({error: "validationError"})
    }
    res.status(200).send("")
})

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})