 document.getElementById("login-form").addEventListener("submit",function(e) {
    e.preventDefault();
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    var indexUser = localStorage.getItem("u-name");
    var indexPwd = localStorage.getItem("pwd");

    if (user == "") {
      document.getElementById("username").innerHTML =
        " ** Please fill the username field";
      return false;
    }
    if (user.length <= 2 || user.length > 20) {
      document.getElementById("username").innerHTML =
        " ** Username lenght must be between 2 and 20";
      return false;
    }
    if (!isNaN(user)) {
      document.getElementById("username").innerHTML =
        " ** only characters are allowed";
      return false;
    } 

    if (user != indexUser){
      document.getElementById("username").innerHTML=
      " ** username is invalid";
      return false;
    }

    if (pass == "") {
      document.getElementById("passwords").innerHTML =
        " ** Please fill the password field";
      return false;
    }
    if (pass.length <= 5 || pass.length > 20) {
      document.getElementById("passwords").innerHTML =
        " ** Passwords lenght must be between  5 and 20";
      return false;
    }

    if (pass != indexPwd) {
      document.getElementById("pass").innerHTML =
        " ** Password does not match the confirm password";
      return false;
    }

    if(pass == indexPwd && user == indexUser){
      window.location.href="Todo.html";
    }

    if(user == indexUser){
      document.getElementById("user").innerHTML="invalid username";
    }

    if(pass == indexPwd){
      document.getElementById("pass").innerHTML="invalid password";
    }

  })

  //object
  










 