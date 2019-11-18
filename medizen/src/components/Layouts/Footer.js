import React from 'react';
import  { AppBar, Toolbar, IconButton, CssBaseline, Paper } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';


function Footer () {
    return (
        <div>
        <CssBaseline/>
        <Paper >
        
      </Paper>

        <AppBar position="fixed" color="primary" >
        <Toolbar>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      </div>
    )
      
  }
  
export default Footer