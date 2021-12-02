import React from "react";
import { Wrapper, ButtonSpan, RadioButton, ButtonLabel } from "./DurationSelector.styles"

export default class DurationSelector extends React.Component {
    render() {
        return (
            <Wrapper>
                {this.props.durations.map(duration => <ButtonSpan>
                        <RadioButton type="radio"  isSelected={duration.active} onClick={() => this.props.handleDurationClick(duration)}/>
                        <ButtonLabel >{duration.length}</ButtonLabel>
                    </ButtonSpan>)}
                    
                </Wrapper>
        )
    }
}