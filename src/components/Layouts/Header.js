import React, { useEffect, useState } from 'react';
import  { AppBar, Toolbar, Typography } from '@material-ui/core';


import { NavLink, Redirect } from 'react-router-dom';


const theme = createMuiTheme({
  palette: {
    primary: { main: green[600] }, // Purple and green play nicely together.
    secondary: { main: grey[50] }, // This is just green.A700 as hex.
  },
  typography: {
    fontFamily: 'quicksand'
  },
});

function Header () {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('token') ? true : false
  );

 
    return (
      <ThemeProvider>
        <AppBar color="primary" position="static">
        <Toolbar>
          
          <Typography variant="h6" >
            MediZen
          </Typography>
          {isLoggedIn 
          ?
          <nav>
            {console.log(isLoggedIn)}
            <NavLink onClick={() => {
              setIsLoggedIn(false);
              localStorage.removeItem('token');
            }} to="/login">Logout</NavLink>
          </nav>
          :
          <nav>
            {console.log(isLoggedIn)}
            <NavLink className='nav-links' to='/register'>Register</NavLink>
            <NavLink className='nav-links' to='/login'>Login</NavLink>
          </nav>
          }
        </Toolbar>
      </AppBar>
    </ThemeProvider>
    )
      
  }
  
export default Header 