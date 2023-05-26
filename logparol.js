function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username == "" || password == "") {
        alert("Пожалуйста, заполните все поля");
    }
    else if (username == "kadr" && password == "123") {
        window.location.replace("kadr.html");
    }
    else if (username == "moder" && password == "123") {
        window.location.replace("admin.html");
    }
    else if (username == "prof" && password == "123") {
        window.location.replace("prof.html");
    }
    else {
        alert("Неправильный логин или пароль");
    }
}
  