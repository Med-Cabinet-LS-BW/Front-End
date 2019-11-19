import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute";
import NewLogin from "./components/Auth/NewLogin";
import Register from "./components/Auth/Register";
import Header from './components/Layouts/Header';
import ViewToggle from './components/HomePage/ViewToggle';
//import Footer from './components/Layouts/Footer';
import './App.css';



const  App = () => {

  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('token') ? true : false
    );

  return(
    <Router>
    <div>
      <Header />
      <Switch>
          <PrivateRoute path="/StrainList">
            <ViewToggle />
          </PrivateRoute>
          <Route path="/login" component={NewLogin} />
      </Switch>
      <Route path="/register" component={Register} />
    </div>
    </Router>
  )
 
}

export default App;