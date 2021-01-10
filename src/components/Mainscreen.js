import Total from "./Total";
import Countries from "./Countries";
import Graphs from "./Graphs";


export default function FullWidthGrid(props) {

  // console.log(props.SetSelection);
 
  
  if(props.SetSelection===0){

    return (
      <Total/>
  );
  }
  else if(props.SetSelection===1){
    return (
      <Countries/>
  );

  }
  else if(props.SetSelection===2){
    return(

      <Graphs />
    );
    
  }
  

}
