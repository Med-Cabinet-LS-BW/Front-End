import React from 'react';
import  { AppBar, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


function Header () {

    return (
        <AppBar position="static">
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
    )
      
  }
  
export default Header 