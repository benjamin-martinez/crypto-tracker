import React from "react";
import { Wrapper, ButtonSpan, RadioButton, ButtonLabel } from "./DurationSelector.styles"

const DurationSelector = (props) => {
    return (
        <Wrapper>
            {props.durations.map(duration => <ButtonSpan>
                    <RadioButton type="radio"  isSelected={duration.active} onClick={() => props.handleDurationClick(duration)}/>
                    <ButtonLabel >{duration.length}</ButtonLabel>
                </ButtonSpan>)}
                
            </Wrapper>
    )
}

export default DurationSelector