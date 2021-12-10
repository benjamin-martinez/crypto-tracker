import React from "react";
import { ChartSubText, ExternalLinkText } from "styles/Fonts";
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
  CopyIcon,
} from "./CoinDescription.styles";

const CoinDescription = (props) => {
  return !props.coin.id ? (
    <></>
  ) : (
    <Wrapper>
      <Title>
        <ChartSubText>Description</ChartSubText>
      </Title>
      <TextWrapper>
        <InnerTextWrapper>
          <StackIcon src="icons/stack.svg" />
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
              <LinkIcon src="icons/link.svg" />
              <ExternalLinkText href={link} target="_blank">
                {link}
              </ExternalLinkText>
              <CopyIcon src="icons/copy.svg" />
            </LinkWrapper>
          ))}
      </LinksWrapper>
    </Wrapper>
  );
};

export default CoinDescription;
