// keshav 
import React from 'react'
import { markerData } from '../Data/markerData';
import { Bar } from 'react-chartjs-2';
import {Chart, LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip} from 'chart.js';
Chart.register(
    LinearScale, 
    CategoryScale,
    BarElement,
    Legend,
    Title,
    Tooltip
)
const dataSize = markerData.length;
// Below is the function that return the array of size three : [count of paid garbage tax, count of paid property tax, count of paid water tax]
const arrTax = markerData.reduce((arr, temp) => {
    if (temp['Garbage Tax'] === 'Paid') {
        arr[0]++
    }
    
    if (temp['Property Tax'] === 'Paid') {
        arr[1]++;
    }
    
    if (temp['Water Tax'] === 'Paid') {
        arr[2]++;
    }
    return arr;
}, [0, 0, 0]);

let percentPaidGarbage = (arrTax[0] * 100) / dataSize,
percentPaidProperty = (arrTax[1] * 100) / dataSize,
percentPaidWater = (arrTax[2] * 100) / dataSize;

const paidPercentArr = [percentPaidGarbage, percentPaidProperty, percentPaidWater];
const unpaidPercentArr = [100 - percentPaidGarbage, 100 - percentPaidProperty, 100 - percentPaidWater];


const labels = ['Garbage Tax', 'Property Tax', 'Water Tax'];
const data = {
    labels,
    datasets : [
        {
            label : 'Paid %',
            data : paidPercentArr,
            backgroundColor : 'green'
        },
        {
            label : 'Unpaid %',
            data : unpaidPercentArr,
            backgroundColor : 'red'
        }
    ]
}
const options = {
    indexAxis : 'y',
    scales: {
        x: {
            max: 100, 
            beginAtZero: true, 
            ticks: {
                stepSize: 10, 
                maxTicksLimit: 11, 
                callback: function (value) {
                    return value + '%'; 
                  },
            },
        },
    },
    plugins: {
        legend: {
          display: true,
          position: 'right', 
          labels: {
            // usePointStyle: true, 
          },
        },
        title: {
            display: true,
            text: "Tax Tracker",
            position: "bottom",
        }
    },
    maintainAspectRatio: false, 
    aspectRatio: 2, 
}

const HBarChart = () => {
  return (
    <div style={{ width: '50vw', height: '60vh' }}>
      <Bar data={data} options={options}/>
    </div>
  )
}

export default HBarChart;