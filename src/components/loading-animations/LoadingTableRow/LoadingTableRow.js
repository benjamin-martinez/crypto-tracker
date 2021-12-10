import { Wrapper, InnerWrapper } from "./LoadingTableRow.styles";

const LoadingTableRow = (props) => {
  const loaders = Array.apply(null, Array(9)).map(function () {});

  return (
    <Wrapper>
      <tr>
        {loaders.map(() => (
          <td>
            <InnerWrapper />
          </td>
        ))}
      </tr>
    </Wrapper>
  );
};

export default LoadingTableRow;
