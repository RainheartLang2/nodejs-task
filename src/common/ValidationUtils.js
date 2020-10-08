const nameRegExp = new RegExp("^[A-Z,a-z,А-Я,а-я,\\s]{10,255}$")
const mailRegExp = new RegExp("^(?=.{10,255}$)[A-Z,a-z,\\d]+@[A-Z,a-z,\\d]+\\.[A-Z,a-z,\\d]+$")
const phoneRegExp = new RegExp("^\\d\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}$")
const passwordRegExp = new RegExp("^[\\S]{6,36}$")

export function validateName(value) {
    return nameRegExp.test(value)
}

export function validateMail(value) {
    return mailRegExp.test(value)
}

export function validatePhone(value) {
    return phoneRegExp.test(value)
}

export function validatePassword(value) {
    return passwordRegExp.test(value)
}