import { Spinner, Wrapper } from "./LoadingSpinner.styles";
import { useWindowSize } from "hooks";
import { getWidth, getHeight } from "utils";

const LoadingSpinner = () => {
  const { width: screenWidth } = useWindowSize();
  console.log(window.innerWidth);
  console.log(getWidth(window.innerWidth));
  console.log(getHeight(window.innerWidth));
  return (
    <Wrapper
      width={getWidth(window.innerWidth)}
      height={getHeight(window.innerWidth)}
    >
      <Spinner />
    </Wrapper>
  );
};

export default LoadingSpinner;
