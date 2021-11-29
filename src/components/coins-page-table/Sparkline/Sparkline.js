import React from "react";
import { Wrapper } from "./Sparkline.styles";
import { Line } from "react-chartjs-2";

export default class Sparkline extends React.Component {
    getLabels = (arr) => arr.map((el, index) => index)
    render() {
        const chartData = () => {
            let borderColor = ""
            if (this.props.prices[0] > this.props.prices[this.props.prices.length-1]) {
                borderColor =  "rgba(254, 16, 64, 1)"
            } else {
                borderColor = "rgba(0, 255, 95, 1)"
            }
            return {
                labels: this.getLabels(this.props.prices),
                datasets: [{
                    data: this.props.prices,
                    tension: 0.4,
                    borderColor: borderColor,
                    fill: false
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
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true,
                        maxTicksLimit: 5,
                    },
                },
                y: {
                    grid: {
                        display: false,
                        drawBorder: false,
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
                    <Line data={chartData} options={options} width={115} height={70}/>
                </Wrapper>
        )
    }
}