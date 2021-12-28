import { Wrapper, ContentWrapper, Icon } from "./Footer.styles";
import GithubSVG from "media/icons/github.svg";
import LinkedInSVG from "media/icons/linkedin.svg";

const Footer = (props) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <a href="https://github.com/benjamin-martinez/crypto-tracker" target="_blank" rel="noreferrer"><Icon src={GithubSVG} /></a>
        <a href="https://www.linkedin.com/in/benjamin-martinez-02950a202/" target="_blank" rel="noreferrer"><Icon src={LinkedInSVG} /></a>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Footer;
