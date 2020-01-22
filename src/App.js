import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from './formsManagement/formLogin'
import FormReg from "./formsManagement/formReg";
import Landing from "./components/landing/marketingPage";
import Dashboard from './components/protectedRoutes/userDashboard'


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={FormReg} />
          <Route path='/login' component={Login}/>
          <Route path='/dashboard' component={Dashboard}/>
        </div> 
      </Router>
    </>
  );
}

export default App;
