import React from "react";

const Dashboard = (props) => {
  const { username } = JSON.parse(localStorage.getItem("credentials"));


  const logout = () => {
      props.history.push('/login')
  }
  return (
    <>
      <h1>Welcome back {username}</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
};


export default Dashboard