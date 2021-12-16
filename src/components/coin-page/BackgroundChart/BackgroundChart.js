import React from "react";
import { Line } from "react-chartjs-2";
import { Wrapper } from "./BackgroundChart.styles";

const BackgroundChart = (props) => {
  const getLabels = (arr) => {
    let labels = arr.map((arr) =>
      new Date(arr[0]).toLocaleString(undefined, {
        month: "short",
        day: "numeric",
      })
    );
    return labels;
  };

  const getPrices = (arr) => {
    let prices = arr.map((arr) => arr[1]);
    return prices;
  };
  const chartData = (canvas) => {
    const ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 0, 0, 350);
    let prices = getPrices(props.coinPrices);
    const borderColor = "rgba(44, 47, 54, 1)";
    gradientFill.addColorStop(0, "rgba(44, 47, 54, .5)");
    gradientFill.addColorStop(1, "rgba(0, 0, 0, 0.0)");
    return {
      labels: getLabels(props.coinPrices),
      datasets: [
        {
          data: prices,
          tension: 0.4,
          borderColor: borderColor,
          fill: true,
          backgroundColor: gradientFill,
        },
      ],
    };
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
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
    },
  };
  return (<Wrapper><Line data={chartData} options={options} width={1520} height={220} /></Wrapper>);
};

export default BackgroundChart;
