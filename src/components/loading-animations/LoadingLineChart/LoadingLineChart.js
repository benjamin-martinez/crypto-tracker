import React from "react";
import { Line } from "react-chartjs-2";
import { Wrapper } from "./LoadingLineChart.styles";

const LoadingLineChart = (props) => {
  const getRandomData = () => {
    const data = [];
    let prev = 100;
    for (let i = 0; i < 1000; i++) {
      prev += 5 - Math.random() * 10;
      data.push(prev);
    }
    return data;
  };

  const chartData = () => {
    let prices = getRandomData();
    const borderColor = "rgba(80, 80, 80, 1)";
    return {
      labels: getRandomData(),
      datasets: [
        {
          data: prices,
          tension: 0.4,
          borderColor: borderColor,
        },
      ],
    };
  };
  const totalDuration = 1000;
  const delayBetweenPoints = totalDuration / 100;
  const previousY = (ctx) =>
    ctx.index === 0
      ? ctx.chart.scales.y.getPixelForValue(100)
      : ctx.chart
          .getDatasetMeta(ctx.datasetIndex)
          .data[ctx.index - 1].getProps(["y"], true).y;
  const animation = {
    x: {
      type: "number",
      easing: "linear",
      duration: delayBetweenPoints,
      from: NaN, // the point is initially skipped
      delay(ctx) {
        if (ctx.type !== "data" || ctx.xStarted) {
          return 0;
        }
        ctx.xStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
    y: {
      type: "number",
      easing: "linear",
      duration: delayBetweenPoints,
      from: previousY,
      delay(ctx) {
        if (ctx.type !== "data" || ctx.yStarted) {
          return 0;
        }
        ctx.yStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
  };
  const options = {
    animation,
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
        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 5,
        },
        grid: {
          display: false,
          drawBorder: false,
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
      <Line data={chartData} options={options} width={650} height={275} />
    </Wrapper>
  );
};

export default LoadingLineChart;
