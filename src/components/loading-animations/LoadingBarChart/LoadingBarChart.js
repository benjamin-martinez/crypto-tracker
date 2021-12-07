import React from "react";
import { Bar } from "react-chartjs-2";
import { Wrapper } from "./LoadingBarChart.styles";

const LoadingBarChart = (props) => {
    const getLabels = () => {
        const data = [];
        let prev = 100;
        for (let i = 0; i < 100; i++) {
          prev += 5 - Math.random() * 10;
          data.push(prev);
        }
        return data;
      };
    
      const getPrices = () => {
        const data = [];
        let prev = 100;
        for (let i = 0; i < 1000; i++) {
          prev += 5 - Math.random() * 10;
          data.push({ x: i, y: prev });
        }
        return data;
      };

  const chartData = (canvas) => {
    const ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 0, 0, 350);
    const borderColor = "rgba(80, 80, 80, 1)";
    gradientFill.addColorStop(0, "rgba(80, 80, 80, .5)");
    gradientFill.addColorStop(1, "rgba(0, 0, 0, 0.0)");
    return {
      labels: getLabels(),
      datasets: [
        {
          data: getPrices(),
          tension: 0.4,
          borderColor: borderColor,
          fill: true,
          backgroundColor: gradientFill,
        },
      ],
    };
  };
  var delayed = false;
  const animation = {
    onComplete: () => {
      delayed = true;
    },
    delay: (context) => {
      let delay = 0;
      if (context.type === 'data' && context.mode === 'default') {
        delay = context.dataIndex * 30 + context.datasetIndex * 10;
      }
      return delay;
    },
  }
  const options = {
    animation,
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

export default LoadingBarChart;
