const adminlogin = "olloyor01.@gmail.com"
const adminpassword = "11223344"

function check(login,password) {
    
    if (login === adminlogin && password === adminpassword) {
        return true
    }
    else{
        return false
    }
}

exports.check = check