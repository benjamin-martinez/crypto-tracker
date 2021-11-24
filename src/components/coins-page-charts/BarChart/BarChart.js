import React from "react";
import { Bar } from "react-chartjs-2";
import { Wrapper } from "./BarChart.styles"

export default class BarChart extends React.Component {

    getLabels = (arr) => {
      let labels = []
      arr.map((arr) => labels.push(new Date(arr[0]).toLocaleString(undefined, {
        month: "short", day: "numeric", 
    })))
      return labels;
    }

    getPrices = (arr) => {
      let prices = []
      arr.map((arr) => prices.push(arr[1]))
      return prices;
    }

    render() {
        const chartData = (canvas) => {
            const ctx = canvas.getContext('2d')
            var gradientFill = ctx.createLinearGradient(0, 0, 0, 350);
            gradientFill.addColorStop(0, "rgba(33, 114, 229, 1)");
            gradientFill.addColorStop(1, "rgba(0, 0, 0, 1)");
            console.log(this.state)
            return {
                labels: this.getLabels(this.props.totalVolumes),
                datasets: [{
                    data: this.getPrices(this.props.totalVolumes),
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
                    <Bar data={chartData} options={options} width={650} height={275}/>
                </Wrapper>
        )
    }
}
