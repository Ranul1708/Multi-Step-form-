import React, { Component } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class FormPersonalData extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
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
                        Personal Data
                    </Typography>
                </Toolbar>
            </AppBar>
            <TextField 
                id="standard-basic" 
                label="occupation" 
                variant="standard" 
                onChange={handleChange("occupation")}
                style={styles.textfield} 
                defaultValue={values.occupation}
            />
            <br/>
            <TextField 
                id="standard-basic" 
                label="city" 
                variant="standard" 
                onChange={handleChange("city")}
                style={styles.textfield} 
                defaultValue={values.city}
            />
            <br/>
            <TextField 
                id="standard-basic" 
                label="bio" 
                variant="standard" 
                onChange={handleChange("bio")}
                style={styles.textfield} 
                defaultValue={values.bio}
            />
            <br/>

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
export default FormPersonalData;

