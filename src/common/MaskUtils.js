export function maskPassword(value) {
    return value.replace(/./g, '*')
}

export function maskMail(value) {
    return "****@" + value.slice(value.indexOf("@") + 1)
}

export function maskPhone(value) {
    return value.replace(/\d/g,'*')
}
