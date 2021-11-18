import React from "react";
import { Wrapper, ContentWrapper, SWrapper } from "./DurationSelector.styles";
import { ChartDurationText } from "../../../styles/Fonts";

class Selection extends React.Component {
    render() {
        return (
            <SWrapper active={this.props.duration.active} onClick={() => this.props.handleDurationClick(this.props.duration)}>
                <ChartDurationText>{this.props.duration.length}</ChartDurationText>
            </SWrapper>
        )
    }
}

export default class DurationSelector extends React.Component {
    render() {
        return (
            <Wrapper>
                <ContentWrapper>
                    {this.props.durations.map(duration => <Selection duration={duration} handleDurationClick={this.props.handleDurationClick}/>)}
                </ContentWrapper>
            </Wrapper>
        )
    }
}
