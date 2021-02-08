import { AppBar, Button, Container, IconButton, Menu, MenuItem, TextField, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Covidapi} from '../Covid/Covidapi';
const Navbar=()=> {
 
    return (
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" id="letter"
          style={{marginRight:"4px"}}>
           Covid Live Updates
          </Typography>
          

        
         
        </Toolbar>
      </AppBar>
    )
};
export default Navbar;