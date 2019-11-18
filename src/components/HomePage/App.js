import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "../Auth/PrivateRoute";
import Login from "../Auth/Login";
import Header from '../Layouts/Header';
import ViewToggle from './ViewToggle';
import Footer from '../Layouts/Footer';
import '../../App.css';

const  App = () => {
  return(
    <Router>
    <div>
      <Header />
      <Switch>
          <PrivateRoute path="/StrainList">
            <ViewToggle />
          </PrivateRoute>
          <Route path="/login" component={Login} />
      </Switch>

    </div>
    </Router>
  )
 
}

export default App;