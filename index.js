const prompt = require('prompt-sync')()
const validition = require("./validition")
const promptfile = require("./prompt")




function register() {
    
    const login = prompt("Loginni kiriting: ")
    const password = prompt("Passwordni kiriting: ")

    if (validition.validlogin(login) != true) {
        return console.log(validition.validlogin(login));
    }

    if (validition.validPassword(password) != true) {
        return console.log(validition.validPassword(password));
    }

    console.log("Yanggi account ochildi login: " + login + '' +" parol: " + password);
}

register()