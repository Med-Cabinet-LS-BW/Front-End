import React, { useEffect, useState } from 'react';
import  { AppBar, Toolbar, Typography } from '@material-ui/core';
import { NavLink, Redirect } from 'react-router-dom';

function Header () {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('token') ? true : false
  );

    return (
        <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" >
            MediZen
          </Typography>
          {isLoggedIn 
          ?
          <nav>
            {/* {console.log(isLoggedIn)} */}
            <NavLink onClick={() => {
              setIsLoggedIn(false);
              localStorage.removeItem('token');
            }} to="/login">Logout</NavLink>
          </nav>
          :
          <nav>
            {/* {console.log(isLoggedIn)} */}
            <NavLink className='nav-links' to='/register'>Register</NavLink>
            <NavLink className='nav-links' to='/login'>Login</NavLink>
          </nav>
          }
        </Toolbar>
      </AppBar>
    )
      
  }
  
export default Header 