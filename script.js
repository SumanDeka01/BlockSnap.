
function login() {
    var mail = document.getElementById("input-mail").value;
    var pass = document.getElementById("input-pass").value;
    if (mail == 'xyz@gmail.com' && pass == '123456') {
        alert("Login successfull.")
        window.location.assign("dashboard.html")
    }
    else {
        alert("Wrong information")
    }
}

