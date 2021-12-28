import { Link } from "react-router-dom";
import OverviewSVG from "media/icons/overview.svg";
import PortfolioSVG from "media/icons/portfolio.svg";
import SummarySVG from "media/icons/summary.svg";
import SearchSVG from "media/icons/search.svg";
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
            <Icon src={OverviewSVG} />
            <Title>Overview</Title>
          </MenuItem>
        </Link>
        <Link to="/portfolio">
          <MenuItem>
            <Icon src={PortfolioSVG} />
            <Title>Portfolio</Title>
          </MenuItem>
        </Link>
        <Link to="/coins">
          <MenuItem>
            <Icon src={SummarySVG} />
            <Title>Summary</Title>
          </MenuItem>
        </Link>
        <MenuItem>
          <Icon src={SearchSVG} />
          <Title>Search</Title>
        </MenuItem>
      </MenuWrapper>
    </Wrapper>
  );
};

export default MobileFooter;
