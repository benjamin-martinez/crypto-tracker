import React from "react";
import { ChartDurationText } from "styles/Fonts";
import { Wrapper, ContentWrapper, SWrapper } from "./DurationSelector.styles";

const Selection = (props) => {
  return (
    <SWrapper
      active={props.duration === props.activeChartDuration}
      onClick={() => props.handleRDurationClick(props.duration)}
    >
      <ChartDurationText>{props.duration}</ChartDurationText>
    </SWrapper>
  );
};

const DurationSelector = (props) => {
  return (
    <Wrapper>
      <ContentWrapper>
        {props.durations.map((duration) => (
          <Selection
            key={duration}
            duration={duration}
            activeChartDuration={props.activeChartDuration}
            handleRDurationClick={props.handleRDurationClick}
          />
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default DurationSelector;
