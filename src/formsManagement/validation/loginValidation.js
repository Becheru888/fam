export function validation(value, setValue) {
  let usernameError = "";
  let passwordError = "";

  //username
  if (value.username === undefined || value.username.length <= 0) {
    usernameError = "Username is empty";
  }

  //password
  if (value.password === undefined || value.password.length <= 0) {
    passwordError = "Password is empty";
  }
  
  setValue({...value ,usernameError, passwordError});
  
  if (usernameError || passwordError) {
    return false
  }
  return true;
}
