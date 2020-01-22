import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import {addUserReducer} from './stateManagemant/reducers';
import { Route } from "react-router-dom";
import Login from './formsManagement/formLogin'
import FormReg from "./formsManagement/formReg";
import Landing from "./components/landing/marketingPage";
import Dashboard from './components/protectedRoutes/userDashboard'


const monsterReducer = combineReducers({
  user: addUserReducer
})

const store = createStore(
  monsterReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={FormReg} />
          <Route path='/login' component={Login}/>
          <Route path='/dashboard' component={Dashboard}/>
        </div> 
      </Router>
    </Provider>
  );
}

export default App;
