import React from "react";
import { Bar } from "react-chartjs-2";
import { useWindowSize } from "hooks";
import { Wrapper } from "./BarChart.styles";
import { getHeight, getWidth } from "utils";

const BarChart = (props) => {
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

  const getPrices = (arr) => arr.map((arr) => arr[1]);

  const chartData = (canvas) => {
    const ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 0, 0, 350);
    gradientFill.addColorStop(0, "rgba(33, 114, 229, 1)");
    gradientFill.addColorStop(1, "rgba(0, 0, 0, 1)");
    return {
      labels: getLabels(props.totalVolumes),
      datasets: [
        {
          data: getPrices(props.totalVolumes),
          tension: 0.4,
          borderColor: "rgba(33, 114, 229, 1)",
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
      decimation: {
        enabled: true,
        algorithm: "min-max",
      },
    },
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
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
          font: {
            size: 9,
          },
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
      <Bar data={chartData} options={options} />
    </Wrapper>
  );
};

export default BarChart;
