 document.getElementById("signup-form").addEventListener("submit",function(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var confirmpass = document.getElementById("conpass").value;
    var emails = document.getElementById("emails").value;

    localStorage.setItem("u-name",user);
    localStorage.setItem("pwd",confirmpass);

    if (name == "") {
      document.getElementById("Name").innerHTML =
        " ** Please fill the Name field";
      return false;
    }

    if (emails == "") {
      document.getElementById("emailids").innerHTML =
        " ** Please fill the email id field";
      return false;
    }
    if (emails.indexOf("@") <= 0) {
      document.getElementById("emailids").innerHTML = " ** Invalid Email";
      return false;
    }

    if (
      emails.charAt(emails.length - 4) != "." &&
      emails.charAt(emails.length - 3) != "."
    ) {
      document.getElementById("emailids").innerHTML = " ** Invalid Email";
      return false;
    }

    if (user == "") {
      document.getElementById("username").innerHTML =
        " ** Please fill the username field";
      return false;
    }
    if (user.length <= 3 || user.length > 20) {
      document.getElementById("username").innerHTML =
        " ** Username lenght must be between 3 and 20";
      return false;
    }
    if (!isNaN(user)) {
      document.getElementById("username").innerHTML =   
        " ** only characters are allowed";
      return false;
    }

    if (pass == "") {
      document.getElementById("passwords").innerHTML =
        " *Please fill the password field";
      return false;
    }
    if (pass.length <= 5 || pass.length > 20) {
      document.getElementById("passwords").innerHTML =
        " ** Passwords lenght must be between  8 and 20";
      return false;
    }

    if (pass != confirmpass) {
      document.getElementById("confrmpass").innerHTML =
        " ** Password Mismatch";
      return false;
    }


    localStorage.setItem("u-name",user);
    localStorage.setItem("pwd",confirmpass);

    window.location.href="login.html";
    
  })

  