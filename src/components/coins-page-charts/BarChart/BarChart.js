import React from "react";
import { Bar } from "react-chartjs-2";
import { Wrapper } from "./BarChart.styles";

const BarChart = (props) => {
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
    <Wrapper>
      <Bar data={chartData} options={options} width={650} height={275} />
    </Wrapper>
  );
};

export default BarChart;
