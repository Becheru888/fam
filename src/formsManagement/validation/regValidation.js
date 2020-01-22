export function validation(value, setValue) {
    let usernameError = "";
    let emailError = "";
    let passwordError = "";
    var userCheck = /^[a-zA-Z0-9_-]{3,16}$/;
    var emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //username_check
    if (value.username === undefined || value.username.length === 0) {
      usernameError = "Username is empty";
    } else if (!userCheck.test(String(value.username))) {
      usernameError = "Invalid username";
      return false;
    }
    //email_check
    if (value.email === undefined || value.email.length === 0) {
      emailError = "Email is empty";
    } else if (
      !value.email.includes("@") ||
      !emailCheck.test(String(value.email).toLowerCase())
    ) {
      emailError = "Invalid Email";
    }
    //password_check
    if (value.password === undefined || value.password.length === 0) {
      passwordError = "Password is empty";
    }
    //check if any error
    if (usernameError || emailError || passwordError) {
        setValue({ usernameError, emailError, passwordError });
      return false;
    }
    return true;
  }
