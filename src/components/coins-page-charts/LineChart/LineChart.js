import React from "react";
import { Line } from "react-chartjs-2";
import { useWindowSize } from "hooks";
import { Wrapper } from "./LineChart.styles";
import { getHeight, getWidth } from "utils";

const LineChart = (props) => {
  const { width: screenWidth } = useWindowSize()

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
    let borderColor = "";
    let prices = getPrices(props.coinPrices);
    if (prices[0] > prices[prices.length - 1]) {
      borderColor = "rgba(254, 16, 64, 1)";
      gradientFill.addColorStop(0, "rgba(254, 16, 64, .5)");
      gradientFill.addColorStop(1, "rgba(0, 0, 0, 0.0)");
    } else {
      borderColor = "rgba(0, 255, 95, 1)";
      gradientFill.addColorStop(0, "rgba(0, 255, 95, .5)");
      gradientFill.addColorStop(1, "rgba(0, 0, 0, 0.0)");
    }
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
    interaction: {
      mode: 'index',
      intersect: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        ticks: {
          align: "start",
          source: "auto",
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 7,
        },
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
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
    <Wrapper width={getWidth(screenWidth)} height={getHeight(screenWidth)}>
      <Line data={chartData} options={options}  />
    </Wrapper>
  );
};

export default LineChart;
