import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute";
import NewLogin from "./components/Auth/NewLogin";
import Header from './components/Layouts/Header';
import ViewToggle from './components/HomePage/ViewToggle';
import Footer from './components/Layouts/Footer';
import './App.css';

const  App = () => {
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

    </div>
    </Router>
  )
 
}

export default App;