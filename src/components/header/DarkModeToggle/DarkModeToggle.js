import React from "react";
import ToggleSVG from "media/icons/scan.svg";
import { Wrapper, Icon } from "./DarkModeToggle.styles";

const DarkModeToggle = (props) => {
  const handleClick = () => {
    props.toggleTheme();
  };
  return (
    <Wrapper onClick={() => handleClick()}>
      <Icon src={ToggleSVG} />
    </Wrapper>
  );
};
export default DarkModeToggle;
