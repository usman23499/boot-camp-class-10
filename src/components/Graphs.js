import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';



import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import Pie from './AllGraphs/pie.js'
import Bar from './AllGraphs/bar.js'

const useStyles = makeStyles({
    root:{
        marginTop:"20px",
    },

   
   Selector:{
      
     
       width:'200px',
       
   },
   manage_selector:{
    display: "flex",
    justifyContent: "space-around",
   },
   Graphs:{

    width:'200px',
    
   },
  });
  
 
  
export default function FullWidthGrid() {
  
  let [globaldata,setglobaldata]=useState([]);

  useEffect(()=>{

    async function callapi(){

      let response=await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort');
      
      let data =await response.json();  // beacuse json also return promise

     

      setglobaldata(data);

    }
    callapi();


  },[])
    
    const classes = useStyles();

  
  const [age, setAge] = React.useState('0');
  
  const handleChange = (event) => {
    
    setAge(event.target.value);}

    const [graphs, setgraphs] = React.useState('1');
  
    const handleGraph = (event) => {
     
        setgraphs(event.target.value);
    }
   
 
  return (
    <div className={classes.root}>

    <div className={classes.manage_selector}>
        
        <FormControl className={classes.Selector} >
        <InputLabel  id="demo-simple-select-helper-label" >Countries</InputLabel>
        <Select
          
          value={age}
          onChange={handleChange}
          
        >
          {globaldata.map((value,index)=>{

              return(
                <MenuItem value={index} key={index} >{value.country}</MenuItem>
              );
          })}
         
          
        </Select>
      </FormControl>


      <FormControl className={classes.Graphs} >
        <InputLabel  id="demo-simple-select-helper-label" >Graphs</InputLabel>
        <Select
          
          value={graphs}
          onChange={handleGraph}
          
        >
         

              
                <MenuItem value={1}>Pie</MenuItem>
                <MenuItem value={0}>Bar</MenuItem>    
          
        </Select>
      </FormControl>
      </div>
         
          


          {graphs ===0 ?  <Bar SetCountry={globaldata[age]} />  :   <Pie SetCountry={globaldata[age]}  />}

      
    </div>
  );
}
