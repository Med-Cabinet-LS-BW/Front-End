import React from 'react';
import  { AppBar, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { green, grey } from '@material-ui/core/colors';


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
    return (
      <ThemeProvider>
        <AppBar color="primary" position="static">
        <Toolbar>
          
          <Typography variant="h6" >
            MediZen
          </Typography>

          <nav>
            <NavLink className='nav-links' to='/register'>Register</NavLink>
            <NavLink className='nav-links' to='/login'>Login</NavLink>
          </nav>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
    )
      
  }
  
export default Header 