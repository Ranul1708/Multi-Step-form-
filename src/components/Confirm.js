import React, { Component } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';









export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        // Process form, API connections, backend stuff (express/flask/python/php)
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


  render() {
    const { values: {firstName, lastName, email, occupation, city} } = this.props;
    return (
        <React.Fragment>
            <AppBar position="static" style={{backgroundColor:"turquoise"}}>
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Confirm User Data
                    </Typography>
                </Toolbar>
            </AppBar>

            <List>
                <ListItem>
                    <ListItemText
                        primary="First Name"
                        secondary={firstName}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Last Name"
                        secondary={lastName}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Email"
                        secondary={email}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Occupation"
                        secondary={occupation}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="City"
                        secondary={city}
                    />
                </ListItem>
            </List>
      
            
            <Button 
                    variant="contained" 
                    style={styles.button} 
                    onClick={this.continue}>Continue</Button>
            
            <Button 
                    variant="contained" 
                    style={styles.button} 
                    onClick={this.back}>Back</Button>

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
export default Confirm;

