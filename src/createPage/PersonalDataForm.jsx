import React, {useState} from "react"
import {Field} from "../components/Field"
import {validateMail, validateName, validatePassword, validatePhone} from "../common/ValidationUtils";

export const PersonalDataForm = () => {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const submitForm = () => {
        new Promise((resolve, reject) => {
            if (validateName(name) && validateMail(mail) && validatePhone(phone) && validatePassword(password)) {
                console.log("resolved")
                resolve({})
            } else {
                console.log("rejected")
                reject({})
            }
        }).then(() => {
            console.log("fetch")
            fetch("http://localhost:3000/save", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, mail, phone, password}),
            }
        )}).then(() => {
            console.log("clear")
            setName("")
            setMail("")
            setPhone("")
            setPassword("")
        })
    }
    return (
        <div
            className={"personal-data-form"}
        >
            <Field
                label={"ФИО"}
                onChange={event => setName(event.target.value)}
                value={name}
            />
            <Field
                label={"e-mail"}
                onChange={event => setMail(event.target.value)}
                value={mail}
            />
            <Field
                label={"Телефон"}
                onChange={event => setPhone(event.target.value)}
                value={phone}
            />
            <Field
                label={"Пароль"}
                type={"password"}
                onChange={event => setPassword(event.target.value)}
                value={password}
            />
            <input type={"button"} onClick={submitForm} value={"Сохранить"}/>
        </div>
    )
}
