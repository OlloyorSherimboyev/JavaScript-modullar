const validlogin = (login) => {
    const regtrims = /^\S*$/;
    const regLates = /^\S+@\S+\.\S+$/;
    
    if (login === "") {
        return "loginda bo'sh joy bo'lmasligi kerak"
    }

    if (!regLates.test(login)) {
        return `loginda "@gmail.com" bo'lishi shart`
    }

    if (!regtrims.test(login)) {
        return "Login son va haarflardan iborat bo'lishi kerak"
    }

    if (login.length < 4) {
        return "Login 4ta belgidan ko'p bo'lishi kerak"
    }

    if (login.length > 40) {
        return "Login 25 belgidan iborat bo'lmasligi kerak"
    }

    else{
        return true
    }
}

const validPassword = (password) => {
    const regtrim = /^\S*$/;
    const regLater = /^[\w.-]*$/

    if (password === "") {
        return "Passwordda bo'sh bo'lmasligi kerak"
    }

    if (!regLater.test(password)) {
        return "Passwordda probel bo'lmasligi kerak"
    }

    if (!regtrim.test(password)) {
        return "Password son va harflardan iborat bo'lishi kerak"
    }

    if (password.length < 8) {
        return "password 8ta belgidan ko'p bo'lishi kerak"
    }

    if (password.length > 30) {
        return "password 30 belgidan ko'p bo'lmasligi kerak"
    }

    else{
        return true
    }
}


module.exports = {
    validlogin,
    validPassword
}