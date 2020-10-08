import express from 'express'
import bodyParser from 'body-parser'
import {validateMail, validateName, validatePassword, validatePhone} from "./common/ValidationUtils"
import {Sequelize, Model, DataTypes} from 'sequelize'

const server = express()
const port = 3000

const sequelize = new Sequelize("mysql://prCryvKVG3:cjJSshUFqe@remotemysql.com:3306/prCryvKVG3")

class Person extends Model {
}

Person.init({
    name: DataTypes.STRING,
    mail: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
}, {sequelize, modelName: 'person'})

async function createPerson(person) {
    await sequelize.sync()
    Person.create(person)
}

server.use(bodyParser.json());

server.get('/index', (req, res) => {
    res.sendFile("/personalForm.html", {root: __dirname})
})

server.get('/list', (req, res) => {
    res.sendFile("/list.html", {root: __dirname})
})

server.post("/service/save", (req, res) => {
    const validated = validateName(req.body.name)
        && validateMail(req.body.mail)
        && validatePhone(req.body.phone)
        && validatePassword(req.body.password)
    if (!validated) {
        res.status(200).send({error: "Ошибка валидации"})
    }
    createPerson({
        name: req.body.name,
        mail: req.body.mail,
        phone: req.body.phone,
        password: req.body.password,
    }).then(() => {
        res.status(200).send({})
    })
})

server.get("/service/list", (req, res) => {
    Person.findAll()
        .then(result => res.json(result))
})

server.get('/resources/*', (req, res) => {
    res.sendFile(req.url, {root: __dirname})
})

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})