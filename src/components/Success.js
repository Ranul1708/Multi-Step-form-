import React, { Component } from 'react'


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



export class Success extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static" style={{backgroundColor:"turquoise"}}>
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Success
                    </Typography>
                </Toolbar>
            </AppBar>
        <h1>Thank You for your Submission!</h1>
        <p>You will be notified by an email about further instructions</p>
      </React.Fragment>
    )
  }
}

export default Success
