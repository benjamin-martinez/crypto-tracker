import { useState, useEffect, useRef } from "react";
import {
  DownNuetralArrow,
  SmallDownNuetralArrow,
  SmallLeftNuetralArrow,
  SmallRightNuetralArrow,
  UpNuetralArrow,
} from "styles/arrows";
import { ChartHeaderText, CoinTableRowText } from "styles/Fonts";
import { useSelector, useDispatch } from "react-redux";
import {
  setActiveCategory,
  setActiveDirection,
  setActiveResultsPerPage,
  incrementPageNum,
  decrementPageNum,
} from "store/coins/action";
import {
  Wrapper,
  ContentWrapper,
  OrderBy,
  DirectionToggle,
  Categories,
  CatWrapper,
  TableNav,
  RowSelectorWrapper,
  RowsSelection,
  SelectionWrapper,
  PageSelectorWrapper,
  PageSelector,
  RowsDropdown,
} from "./TableFilters.styles";

const TableFilters = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const categories = useSelector((state) => state.coins.categories);
  const activeCategory = useSelector((state) => state.coins.activeCategory);
  const directions = useSelector((state) => state.coins.directions);
  const activeDirection = useSelector((state) => state.coins.activeDirection);
  const keys = useSelector((state) => state.coins.keys);
  const activeKey = useSelector((state) => state.coins.activeKey);
  const resultsPerPage = useSelector((state) => state.coins.resultsPerPage);
  const pageNum = useSelector((state) => state.coins.pageNum);
  const activeResultsPerPage = useSelector(
    (state) => state.coins.activeResultsPerPage
  );
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
  };

  const handleDirectionToggleClick = () =>
    activeDirection.directionId === "desc"
      ? dispatch(setActiveDirection(directions[1]))
      : dispatch(setActiveDirection(directions[0]));

  const handlePageUpClick = () => dispatch(incrementPageNum());

  const handlePageDownClick = () => dispatch(decrementPageNum());

  const handleRowsDropdownClick = () => setIsDropdownActive(!isDropdownActive);

  const handleRowSelectionClick = (num) =>
    dispatch(setActiveResultsPerPage(num));

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsDropdownActive(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <OrderBy>
          <DirectionToggle onClick={() => handleDirectionToggleClick()}>
            <UpNuetralArrow />
            <DownNuetralArrow />
          </DirectionToggle>
          <ChartHeaderText>{activeDirection.name} Coins by</ChartHeaderText>
          <ChartHeaderText>Market Cap</ChartHeaderText>
          <DownNuetralArrow />
        </OrderBy>
        <Categories>
          {categories.map((category) => (
            <CatWrapper
              selected={category.categoryId === activeCategory.categoryId}
              onClick={() => handleCategoryClick(category)}
            >
              <CoinTableRowText>{category.name}</CoinTableRowText>
            </CatWrapper>
          ))}
        </Categories>
        <TableNav>
          <RowSelectorWrapper>
            <CoinTableRowText>Show Rows:</CoinTableRowText>{" "}
            <RowsSelection onClick={handleRowsDropdownClick}>
              {activeResultsPerPage}
              <SmallDownNuetralArrow />
              {isDropdownActive && (
                <RowsDropdown ref={wrapperRef}>
                  {resultsPerPage.map((num) => (
                    <SelectionWrapper
                      onClick={() => handleRowSelectionClick(num)}
                    >
                      {num}
                    </SelectionWrapper>
                  ))}
                </RowsDropdown>
              )}
            </RowsSelection>
          </RowSelectorWrapper>
          <PageSelectorWrapper>
            <CoinTableRowText>Page:</CoinTableRowText>
            <PageSelector>
              <SmallLeftNuetralArrow onClick={handlePageDownClick} />
              {pageNum}
              <SmallRightNuetralArrow onClick={handlePageUpClick} />
            </PageSelector>
          </PageSelectorWrapper>
        </TableNav>
      </ContentWrapper>
    </Wrapper>
  );
};

export default TableFilters;
