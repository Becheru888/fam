import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { validation } from "./validation/loginValidation";

const initial = {
  username: "",
  password: "",
  usernameError: "",
  passwordError: ""
};

function Login(props) {
  const [inputsValue, setInputsValue] = useState({
    username: "",
    password: "",
    usernameError: "",
    passwordError: ""
  });

  function handleChange(e) {
    setInputsValue({
      ...inputsValue,
      [e.target.name]: e.target.value
    });
  }

  const isValid = _ => validation(inputsValue, setInputsValue) 
  

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid()) {
      const { username, password } = inputsValue;

      const newUser = JSON.stringify({ username, password });
      const existingUser = localStorage.getItem("credentials");

      if (newUser === existingUser) {
        props.history.push("/dashboard");
      } else {
        console.log("Wrong pass" + existingUser);
      }
      setInputsValue({
        ...initial
      });
    }
  }

  return (
    <Formwrapper>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
            value={inputsValue.username || ""}
            className="form-control"
          />
          <p>{inputsValue.usernameError}</p>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={inputsValue.password || ""}
            className="form-control"
          />
          <p className="passwordError">{inputsValue.passwordError}</p>
        </div>
        <Link to="/register">
          <h6>Singup</h6>
        </Link>
        <div className="form-group form-check">
          <label className="form-check-label">Remember me</label>
          <input
            type="checkbox"
            name="isChecked"
            className="form-check-input"
            id="exampleCheck3"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </Formwrapper>
  );
}

export default Login;

export const Formwrapper = styled.div`
  width: 200px;
  margin: 50px auto;

  @media (max-width: 500px) {
    width: 80%;
    margin: 20px auto;
  }

  button {
    width: 50%;
  }

  p {
    font-size: 12px;
    color: red;
    font-family: "Roboto Mono", monospace;
  }

  label {
    font-family: "Roboto Mono", monospace;
    margin-right: 40px;
  }
`;
