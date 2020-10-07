export function validateName(value) {
    return new RegExp("^[A-Z,a-z,А-Я,а-я,\\s]{10,255}$").test(value)
}

export function validateMail(value) {
    return new RegExp("^\\S+@\\S+$").test(value)
}

export function validatePhone(value) {
    return new RegExp("^\\d{11}$").test(value)
}

export function validatePassword(value) {
    return new RegExp("^\\S{6, 36}$")
}