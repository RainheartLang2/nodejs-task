export function maskPassword(value) {
    return "*".repeat(value.length)
}

export function maskMail(value) {
    return "****@" + value.slice(value.indexOf("@") + 1)
}

export function maskPhone(value) {
    return value.replace(/\d/g,'*')
}
