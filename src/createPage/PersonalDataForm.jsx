import React, {useCallback, useState} from "react"
import {Field} from "../components/Field"
import {validateMail, validateName, validatePassword, validatePhone} from "../common/ValidationUtils"
import {MaskedField} from "../components/MaskedField"
import {ErrorArea} from "../components/ErrorArea"

const validate = ({
                      resolve,
                      reject,
                      name,
                      mail,
                      phone,
                      password
                  }) => {
    if (!validateName(name)) {
        reject("ФИО введены некорректно")
    }
    if (!validateMail(mail)) {
        reject("Почтовый адрес введён некорректно")
    }
    if (!validatePhone(phone)) {
        reject("Телефон введён некорректно")
    }
    if (!validatePassword(password)) {
        reject("Пароль введён некорректно")
    }
    resolve()
}

const saveData = ({name, mail, phone, password}) => {
    return fetch("/service/save", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, mail, phone, password}),
    })
}

export const PersonalDataForm = () => {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const submitForm = useCallback(() => {
        new Promise((resolve, reject) => validate({resolve, reject, name, mail, phone, password}))
            .then(() => saveData({name, mail, phone, password}))
            .then(response => response.json())
            .then(body => {
                if (body.error) {
                    throw body.error
                }
            })
            .then(() => {
                setName("")
                setMail("")
                setPhone("")
                setPassword("")
                setError("")
            })
            .catch(error => {
                setError(error)
            })
    })

    return (
        <div
            className={"personal-data-form"}
        >
            <a href={"/list"}>
                Перейти к списку данных
            </a>
            <ErrorArea
                message={error}
            />
            <Field
                label={"ФИО"}
                onChange={setName}
                value={name}
                maxLength={255}
            />
            <Field
                label={"e-mail"}
                onChange={setMail}
                value={mail}
                maxLength={255}
            />
            <MaskedField
                mask={"9(999)999-99-99"}
                placeholder={"_(___) ___-__-__"}
                label={"Телефон"}
                onChange={setPhone}
                value={phone}
            />
            <Field
                label={"Пароль"}
                type={"password"}
                onChange={setPassword}
                value={password}
                maxLength={36}
            />
            <input type={"button"} onClick={submitForm} value={"Сохранить"}/>
        </div>
    )
}
