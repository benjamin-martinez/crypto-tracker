import React from "react";
import { ChartSubText, ExternalLinkText } from "styles/Fonts";
import { Wrapper, Title, TextWrapper, InnerTextWrapper, StackIcon, DescText, LinksWrapper, LinkWrapper, LinkIcon, CopyIcon } from "./CoinDescription.styles";

export default class CoinDescription extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title><ChartSubText>Description</ChartSubText></Title>
                <TextWrapper>
                    <InnerTextWrapper>
                        <StackIcon src="icons/stack.svg" />
                        <DescText><div dangerouslySetInnerHTML={{__html:this.props.coin.description.en}}/></DescText>
                    </InnerTextWrapper>
                </TextWrapper>
                <LinksWrapper>
                    <LinkWrapper>
                        <LinkIcon src="icons/link.svg"/>
                        <ExternalLinkText href={this.props.coin.links.blockchain_site[0]} target="_blank">{this.props.coin.links.blockchain_site[0]}</ExternalLinkText>
                        <CopyIcon src="icons/copy.svg"/>
                    </LinkWrapper>
                    <LinkWrapper>
                        <LinkIcon src="icons/link.svg"/>
                        <ExternalLinkText href={this.props.coin.links.blockchain_site[1]} target="_blank">{this.props.coin.links.blockchain_site[1]}</ExternalLinkText>
                        <CopyIcon src="icons/copy.svg"/>
                    </LinkWrapper>
                    <LinkWrapper>
                        <LinkIcon src="icons/link.svg"/>
                        <ExternalLinkText href={this.props.coin.links.blockchain_site[2]} target="_blank">{this.props.coin.links.blockchain_site[2]}</ExternalLinkText>
                        <CopyIcon src="icons/copy.svg"/>
                    </LinkWrapper>
                </LinksWrapper>
            </Wrapper>
        )
    }
}