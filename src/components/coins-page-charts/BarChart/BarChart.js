import React from "react";
import { Bar } from "react-chartjs-2";
import { Wrapper } from "./BarChart.styles"

export default class BarChart extends React.Component {
    render() {
        let cLabels = []
        let cPrices = []
        this.props.totalVolumes.forEach((arr) => {
            cLabels.push(arr[0])
            cPrices.push(arr[1])
        })
        const data = (canvas) => {
            const ctx = canvas.getContext('2d')
            var gradientFill = ctx.createLinearGradient(0, 0, 0, 350);
            gradientFill.addColorStop(0, "rgba(33, 114, 229, 1)");
            gradientFill.addColorStop(1, "rgba(0, 0, 0, 1)");
            return {
                labels: cLabels.map(l => new Date(l).toLocaleString(undefined, {
                    month: "short", day: "numeric", 
                })),
                datasets: [{
                    data: cPrices,
                    tension: 0.4,
                    borderColor: "rgba(33, 114, 229, 1)",
                    fill: true,
                    backgroundColor: gradientFill
                }],
            }
          }
          const options = {
            plugins: {
              legend: {
                  display: false
              },    
              decimation: {
                enabled: true,
                algorithm: 'min-max',
              },
            }, 
            maintainAspectRatio: false,
            elements: {
                point:{
                    radius: 0
                }
            },
            scales: {
                x: {
                    ticks: {
                        align: "start",
                        source: 'auto',
                        // Disabled rotation for performance
                        maxRotation: 0,
                        autoSkip: true,
                        maxTicksLimit: 7,
                      },
                  grid: {
                    display: false,
                  }
                },
                y: {
                  grid: {
                    display: false
                  },
                  ticks: {
                    display: false,
                      beginAtZero: true,
                      maxTicksLimit: 5,
                  },
                },
              }
          }
        return (
                <Wrapper>
                    <Bar data={data} options={options} width={650} height={275}/>
                </Wrapper>
        )
    }
}
