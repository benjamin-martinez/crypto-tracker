import React from "react";
import { Bar } from "react-chartjs-2";
import { Wrapper } from "./LoadingBarChart.styles";

const LoadingBarChart = (props) => {
    const getLabels = () => {
        const data = [];
        let prev = 100;
        for (let i = 0; i < 100; i++) {
          prev += 5 - Math.random() * 10;
          data.push(Math.abs(prev));
        }
        return data;
      };
    
      const getPrices = () => {
        const data = [];
        let prev = 100;
        for (let i = 0; i < 1000; i++) {
          prev += 5 - Math.random() * 10;
          data.push(Math.abs(prev));
        }
        return data;
      };

  const chartData = () => {
    const borderColor = "rgba(80, 80, 80, 1)";
    return {
      labels: getLabels(),
      datasets: [
        {
          data: getPrices(),
          tension: 0.4,
          borderColor: borderColor,
          fill: true,
          backgroundColor: borderColor,
        },
      ],
    };
  };
  const animation = {
    delay: (context) => {
      let delay = 0;
      if (context.type === 'data' && context.mode === 'default') {
        delay = context.dataIndex * 3 + context.datasetIndex;
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
          display: false,
          beginAtZero: true,
          maxTicksLimit: 5,
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
