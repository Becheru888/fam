import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Formwrapper} from './formLogin'
import {validation} from './validation/regValidation'


const user = {
  username: 'Remy',
  password: 'purcel'
}

localStorage.setItem('credentials', JSON.stringify(user))


function FormReg(props) {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    usernameError: "",
    emailError: "",
    passwordError: ""
  });

  function changeHandle(e) {
    const isCheckbox = e.target.type === "checkbox";
    setInputs({
      ...inputs,
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value
    });
  }

const isVlaid = _ => validation(inputs, setInputs)


  function onSubmit(e) {
    e.preventDefault();
    if (isVlaid()) {
      const {username, email, password} = inputs
      console.log(username, email, password);
      props.history.push("/login");
    }
  }

  return (
    <Formwrapper>
      <form onSubmit={onSubmit} className='form-group'>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={changeHandle}
          value={inputs.username || ""}
          className="form-control"
        />
        <p>{inputs.usernameError}</p>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={changeHandle}
          value={inputs.email || ""}
          className="form-control"
        />
        <p>{inputs.emailError}</p>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={changeHandle}
          value={inputs.password || ""}
          className="form-control"
        />
        <p className="passError">{inputs.passwordError}</p>
        <Link to="/login" className="link">
          <h6>Already an user?</h6>
        </Link>
        <button type="submit" className="btn btn-primary" >Register</button>
      </form>
    </Formwrapper>
  );
}

export default FormReg;

