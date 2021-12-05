import React from "react";
import { Wrapper, ContentWrapper, SWrapper } from "./DurationSelector.styles";
import { ChartDurationText } from "../../../styles/Fonts";

const Selection = (props) => {
  return (
    <SWrapper
      active={props.duration.active}
      onClick={() => props.handleDurationClick(props.duration)}
    >
      <ChartDurationText>{props.duration.length}</ChartDurationText>
    </SWrapper>
  );
};

const DurationSelector = (props) => {
  return (
    <Wrapper>
      <ContentWrapper>
        {props.durations.map((duration) => (
          <Selection
            duration={duration}
            handleDurationClick={props.handleDurationClick}
          />
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default DurationSelector;
