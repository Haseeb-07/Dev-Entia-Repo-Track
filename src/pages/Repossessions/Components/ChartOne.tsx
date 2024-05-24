import React from 'react'
import ReactApexChart from 'react-apexcharts'

const ChartOne = () => {
    const series = [{
        name: 'candle',
        data: [
          {
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6633.33, 6633.33] // No wicks
          },
          {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6630.11, 6630.11] // No wicks
          },
          {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6635.65, 6635.65] // No wicks
          },
          {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6638.24, 6638.24] // No wicks
          },
          {
            x: new Date(1538785800000),
            y: [6638.24, 6640, 6624.47, 6624.47] // No wicks
          },
          {
            x: new Date(1538787600000),
            y: [6624.53, 6636.03, 6624.31, 6624.31] // No wicks
          },
          {
            x: new Date(1538789400000),
            y: [6624.61, 6632.2, 6626.02, 6626.02] // No wicks
          },
          {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6603.02, 6603.02] // No wicks
          },
        ]
    }];
    
    
      const options = {
        chart: {
          height: 350,
          type: 'candlestick',
          toolbar:{
            show:false
          }
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          type: 'category',
          labels: {
            trim: true, // Trim x-axis labels
            style: {
              fontSize: '12px'
            },
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          tickAmount: 20 // Show only 20 labels
        },
        yaxis: {
          tooltip: {
            enabled: false
          }
        },
        grid: {
          borderColor: 'gray', // Set grid color to white
          strokeDashArray: 5 // Set dashed lines
        },
        responsive: [
          {
            breakpoint: 1200,
            options: {
              chart: {
                height: 300,
              },
            },
          },
          {
            breakpoint: 992,
            options: {
              chart: {
                height: 250,
              },
            },
          },
          {
            breakpoint: 768,
            options: {
              chart: {
                height: 300,
              },
            },
          },
          {
            breakpoint: 576,
            options: {
              chart: {
                height: 250,
              },
            },
          },
        ],
        plotOptions: {
          candlestick: {
            horizontal: false,
            borderRadius: 10,
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'last', // 'all', 'last'
            colors: {
              upward: '#ea5136', // Color for upward candles
              downward: '#f4a086' // Color for downward candles
            },
            wick: {
              useFillColor: false // Remove wicks
            },
          }
        }
      };
  return (
    <ReactApexChart options={options} series={series} type="candlestick" height={550} />
  )
}

export default ChartOne