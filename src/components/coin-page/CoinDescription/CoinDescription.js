import React from "react";
import { ChartSubText, ExternalLinkText } from "styles/Fonts";
import StackSVG from "media/icons/stack.svg";
import CopySVG from "media/icons/copy.png";
import LinkSVG from "media/icons/link.svg";
import {
  Wrapper,
  Title,
  TextWrapper,
  InnerTextWrapper,
  StackIcon,
  DescText,
  LinksWrapper,
  LinkWrapper,
  LinkIcon,
  LinkSpan,
  CopyIcon,
} from "./CoinDescription.styles";

const CoinDescription = (props) => {
  return (
    <Wrapper>
      <Title>
        <ChartSubText>Description</ChartSubText>
      </Title>
      <TextWrapper>
        <InnerTextWrapper>
          <StackIcon src={StackSVG} />
          <DescText>
            <div
              dangerouslySetInnerHTML={{ __html: props.coin.description.en }}
            />
          </DescText>
        </InnerTextWrapper>
      </TextWrapper>
      <LinksWrapper>
        {props.coin.links.blockchain_site
          .filter((link, index) => index < 3)
          .map((link) => (
            <LinkWrapper>
              <LinkIcon src={LinkSVG} />
              <LinkSpan>
                <ExternalLinkText href={link} target="_blank">
                  {link}
                </ExternalLinkText>
                <CopyIcon src={CopySVG} />
              </LinkSpan>
            </LinkWrapper>
          ))}
      </LinksWrapper>
    </Wrapper>
  );
};

export default CoinDescription;
