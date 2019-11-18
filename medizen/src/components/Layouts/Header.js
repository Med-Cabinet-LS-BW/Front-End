import React from 'react';
import  { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Header () {
    return (
        <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" >
            MediZen
          </Typography>
        </Toolbar>
      </AppBar>
    )
      
  }
  
export default Header 