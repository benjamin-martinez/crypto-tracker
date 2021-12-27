import { Link } from "react-router-dom";
import {
  Wrapper,
  MenuWrapper,
  MenuItem,
  Icon,
  Title,
} from "./MobileFooter.styles";

const MobileFooter = () => {
  return (
    <Wrapper>
      <MenuWrapper>
        <Link to="/coins">
          <MenuItem>
            <Icon src="icons/overview.svg" />
            <Title>Overview</Title>
          </MenuItem>
        </Link>
        <Link to="/portfolio">
          <MenuItem>
            <Icon src="icons/portfolio.svg" />
            <Title>Portfolio</Title>
          </MenuItem>
        </Link>
        <Link to="/coins">
          <MenuItem>
            <Icon src="icons/summary.svg" />
            <Title>Summary</Title>
          </MenuItem>
        </Link>
          <MenuItem>
            <Icon src="icons/search.svg" />
            <Title>Search</Title>
          </MenuItem>
      </MenuWrapper>
    </Wrapper>
  );
};

export default MobileFooter;
