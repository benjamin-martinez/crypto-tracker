import { Spinner, Wrapper } from "./LoadingSpinner.styles";
import { getWidth, getHeight } from "utils";

const LoadingSpinner = () => {
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
