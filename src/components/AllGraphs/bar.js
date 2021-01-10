import React from 'react';
import {Bar} from 'react-chartjs-2';






function Barchart(props){
    
    console.log(props.SetCountry)
    var fetch_data=props.SetCountry;
    var data={}

    if(fetch_data !==undefined){

        data = {

            labels: ['Today Cases', 'Today Deaths', 'Today Recovered'],
            datasets: [
              {
                label: fetch_data.country,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [fetch_data.todayCases, fetch_data.todayDeaths,fetch_data.todayRecovered]
              }
            ]
       };
       if(fetch_data.todayCases===0 && fetch_data.todayDeaths===0 && fetch_data.todayRecovered===0 ){
           data = {
            labels: ['Today Zero Cases', 'Today Zero Deaths', 'Today Zero Recovered'],
                datasets: [
                    {
                    label: fetch_data.country,
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    
                    }
                ]
           };
       }
   }
   
 
    return (
      <div >
       
        <Bar
          data={data}
          width={50}
          height={20}
          
        />
      </div>
    );
  }
export default Barchart;