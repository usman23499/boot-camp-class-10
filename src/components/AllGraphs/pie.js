import React from 'react';
import {Pie} from 'react-chartjs-2';



  
function MyPie(props) {

    console.log(props.SetCountry)
    var fetch_data=props.SetCountry;
    var data={}

    if(fetch_data !==undefined){

         data = {
            labels: [
                'Today Cases',
                'Today Deaths',
                'Today Recovered'
            ],
            datasets: [{
                data: [fetch_data.todayCases,fetch_data.todayDeaths, fetch_data.todayRecovered],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };
        if(fetch_data.todayCases===0 && fetch_data.todayDeaths===0 && fetch_data.todayRecovered===0 ){
            data = {
                labels: [
                    'Today ZERO Cases',
                    'Today ZERO Deaths',
                    'Today ZERO Recovered'
                ],
                datasets: [{
                    data: [fetch_data.todayCases,fetch_data.todayDeaths, fetch_data.todayRecovered],
                    backgroundColor: [
                    '#FF6384',
                    '#36A2EB',  
                    '#FFCE56'
                    ],
                   
                }]
            };
        }
    }
    


    return (
        <div>
         <br />
         <br />
          <Pie data={data} height={90}/>
        </div>
      );
}

export default MyPie;