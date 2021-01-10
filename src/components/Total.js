import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    
    margin:"0 auto",
    marginTop:'50px',
    maxWidth:1000,
   
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title:{

    color:'lightblue'

  },
}));

export default function FullWidthGrid() {
  
  let [globaldata,setglobaldata]=useState({});

  useEffect(()=>{

    async function callapi(){

      let response=await fetch('https://corona.lmao.ninja/v2/all?yesterday');
      
      let data =await response.json();  // beacuse json also return promise

      

      setglobaldata(data);

    }
    callapi();


  },[])
  
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid container spacing={3} >

        {Object.keys(globaldata).map((key,index)=>{  // is main object ke key aate hai key main

          return(

            <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={3} >
            <h3 className={classes.title}>
              {key.toUpperCase()}
            </h3>
            <h3>
              {globaldata[key]} 
              {/* is ko squre barcket q ke abhi ye array hai and yahan we acess ase he */}
            </h3>
          </Paper>
          {/* we add evelation for achi border */}
          </Grid>

          )


        })}
        
        
      </Grid>
    </div>
  );
}
