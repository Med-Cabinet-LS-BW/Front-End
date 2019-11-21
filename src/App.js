import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute";
import NewLogin from "./components/Auth/NewLogin";
import Register from "./components/Auth/Register";
import Header from './components/Layouts/Header';
import ViewToggle from './components/Home/ViewToggle';
import { ThemeProvider } from '@material-ui/core/styles'
//import Footer from './components/Layouts/Footer';
import './App.css';

const theme = {};

const  App = () => {

  return(
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <Header />
            <Switch>
                <PrivateRoute path="/Strains">
                  <ViewToggle />
                </PrivateRoute>
                <Route path="/login" component={NewLogin} />
            </Switch>
            <Route path="/register" component={Register} />
        </div>
      </ThemeProvider>
    </Router>

    
  )
 
}

export default App;
