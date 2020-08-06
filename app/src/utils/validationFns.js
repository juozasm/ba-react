export function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())) {
        return "Not valid email"
    }
}

export function isValidPhone(phone) {
    const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    if (!re.test(String(phone).toLowerCase())) {
        return "Not valid phone"
    }
}

export function isNotEmpty(value) {
    if (value === "" || value === undefined || value === null) {
        return "Field is required"
    }
}
