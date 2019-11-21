import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute";
import NewLogin from "./components/Auth/NewLogin";
import Register from "./components/Auth/Register";
import Header from './components/Layouts/Header';
import ViewToggle from './components/Home/ViewToggle';
//import Footer from './components/Layouts/Footer';
import './App.css';

const  App = () => {

  return(
    <Router>
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
    </Router>
  )
 
}

export default App;


// import React, { Component } from 'react';
// import PostForm from './PostForm';
// import AllPost from './AllPost';


// class App extends Component {
// render() {
// return (
// <div className="App">
//   <div className="navbar">
//     <h2 className="center ">Post It</h2>
//     </div>
//     <PostForm />
//     <AllPost />
// </div>
// );
// }
// }
// export default App;