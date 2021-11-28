import React from "react";
import { Line } from "react-chartjs-2";
import { Wrapper } from "./LineChart.styles";

export default class Chart extends React.Component {

  getLabels = (arr) => {
    let labels = arr.map((arr) => new Date(arr[0]).toLocaleString(undefined, {
      month: "short", day: "numeric", 
  }))
    return labels;
  }

  getPrices = (arr) => {
    let prices = arr.map((arr) => arr[1])
    return prices;
  }
    render() {
        const chartData = (canvas) => {
            const ctx = canvas.getContext('2d')
            var gradientFill = ctx.createLinearGradient(0, 0, 0, 350);
            let borderColor = ""
            let prices = this.getPrices(this.props.coinPrices)
            if (prices[0] > prices[prices.length-1]) {
                borderColor =  "rgba(254, 16, 64, 1)"
                gradientFill.addColorStop(0, "rgba(254, 16, 64, .5)");
                gradientFill.addColorStop(1, "rgba(0, 0, 0, 0.0)");
            } else {
                borderColor = "rgba(0, 255, 95, 1)"
                gradientFill.addColorStop(0, "rgba(0, 255, 95, .5)");
                gradientFill.addColorStop(1, "rgba(0, 0, 0, 0.0)");
            }
            return {
                labels: this.getLabels(this.props.coinPrices),
                datasets: [{
                    data: prices,
                    tension: 0.4,
                    borderColor: borderColor,
                    fill: true,
                    backgroundColor: gradientFill
                }],
            }
          }
          const options = {
            plugins: {
              legend: {
                  display: false
              }
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
                    <Line data={chartData} options={options} width={650} height={275}/>
                </Wrapper>
        )
    }
}
