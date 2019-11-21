import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "../Auth/PrivateRoute";
import Login from "../Auth/Login";
import Header from '../Layouts/Header';
import ViewToggle from './ViewToggle';
import '../../App.css';

const  App = () => {
  return(
    <Router>
      <div>
        <Header />
        <Route path="/login" component={Login} />
        <Switch>
            <ViewToggle/>
            <PrivateRoute path="/" component={ViewToggle}/>
        </Switch>

      </div>
    </Router>
  )
 
}

export default App;