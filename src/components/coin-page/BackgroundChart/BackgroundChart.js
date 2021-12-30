import React from "react";
import { Line } from "react-chartjs-2";
import { useWindowSize } from "hooks";
import { Wrapper } from "./BackgroundChart.styles";

const BackgroundChart = (props) => {
  const { width: screenWidth } = useWindowSize();
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
    let gradientFill = ctx.createLinearGradient(0, 0, 0, 210);
    let prices = getPrices(props.coinPrices);
    const borderColor = "rgba(44, 47, 54, 1)";
    gradientFill.addColorStop(1, "rgba(0, 0, 0, 0.0)");
    gradientFill.addColorStop(0, "rgba(44, 47, 54, .5)");
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
  return (
    <Wrapper width={screenWidth - window.scrollX*2}>
      <Line data={chartData} options={options} />
    </Wrapper>
  );
};

export default BackgroundChart;
