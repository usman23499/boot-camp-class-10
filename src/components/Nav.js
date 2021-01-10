import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import {  makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  
 
  title: {
    
    margin:'0 auto',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      margin:0,
    },
   
  },
  
 
  
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography className={classes.title}  variant="h6" noWrap>
            Covid-19 Tracker
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
