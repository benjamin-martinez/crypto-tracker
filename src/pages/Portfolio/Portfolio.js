import React from "react";
import LoadingLineChart from "components/loading-animations/LoadingLineChart";
import { Wrapper } from "./Portfolio.styles";
import LoadingBarChart from "components/loading-animations/LoadingBarChart/LoadingBarChart";

const Portfolio = () => {
  return (
    <Wrapper>
      <LoadingLineChart />
      <LoadingBarChart />
    </Wrapper>
  );
};

export default Portfolio;
