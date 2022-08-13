import React, { Component } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';








export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


  render() {
    const { values, handleChange } = this.props;
    return (
        <React.Fragment>
            <AppBar position="static" style={{backgroundColor:"turquoise"}}>
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Add User Details
                    </Typography>
                </Toolbar>
            </AppBar>
      
            <TextField 
                id="standard-basic" 
                label="First Name" 
                variant="standard" 
                onChange={handleChange("firstName")}
                style={styles.textfield} 
                defaultValue={values.firstName}
            />
            <br/>
            <TextField 
                id="standard-basic" 
                label="Last Name" 
                variant="standard" 
                onChange={handleChange("lastName")}
                style={styles.textfield} 
                defaultValue={values.lastName}
            />
            <br/>

            <TextField 
                id="standard-basic" 
                label="email" 
                variant="standard" 
                onChange={handleChange("email")}
                style={styles.textfield} 
                defaultValue={values.email}
            />
            <br/>
            <Button 
                    variant="contained" 
                    style={styles.button} 
                    onClick={this.continue}>Continue</Button>

        </React.Fragment>
        
    
    );
  }
}

const styles = {
    button: {
        margin: 15
    },
    textfield: {
        margin: 20
    }
}
export default FormUserDetails;

