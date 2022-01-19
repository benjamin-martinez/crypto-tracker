import ExitSVG from "media/icons/exit.svg";
import { SectionHeading2 } from "styles/Fonts";
import {
  Wrapper,
  ContentWrapper,
  SearchWrapper,
  Input,
  ExitButton,
} from "./MobileSearchModal.styles";

const MobileSearchModal = (props) => {
  return (
    <Wrapper isActive={props.isActive}>
      <ContentWrapper>
          <SearchWrapper>
            <Input placeholder="Search coins..."/>
          </SearchWrapper>
        <ExitButton src={ExitSVG} onClick={props.handleMobileSearchClick}/>
      </ContentWrapper>
    </Wrapper>
  );
};

export default MobileSearchModal;
