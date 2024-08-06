const prompt = require("prompt-sync")()
const check = require("./check")
const adminlogin = prompt("Admin login: ")
const adminpassword = prompt("Admin password: ")

const checkAuth = check.check(adminlogin,adminpassword)

exports.checkAuth = checkAuth