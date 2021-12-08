import { DownNuetralArrow, UpNuetralArrow } from "styles/arrows";
import { ChartHeaderText, CoinTableRowText } from "styles/Fonts";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory } from "store/coins/action";
import { Wrapper, ContentWrapper, OrderBy, DirectionToggle, Categories, CatWrapper, TableNav } from "./TableFilters.styles"

const TableFilters = () => {

    const categories = useSelector(state => state.coins.categories)
    const activeCategory = useSelector(state => state.coins.activeCategory)
    const dispatch = useDispatch()

    const handleClick = (category) => {
        dispatch(setActiveCategory(category))
    }

    return (
        <Wrapper>
            <ContentWrapper>
                <OrderBy>
                    <DirectionToggle>
                        <UpNuetralArrow />
                        <DownNuetralArrow />
                    </DirectionToggle>
                    <ChartHeaderText>Top Coins by</ChartHeaderText>
                    <ChartHeaderText>Market Cap</ChartHeaderText>
                    <DownNuetralArrow />
                </OrderBy>
                <Categories>
                    {categories.map((category) => <CatWrapper selected={category.categoryId === activeCategory.categoryId} onClick={() => handleClick(category)}><CoinTableRowText>{category.name}</CoinTableRowText></CatWrapper>)}
                </Categories>
                <TableNav>
                    <CoinTableRowText>Show Rows: 25</CoinTableRowText>
                    <CoinTableRowText>Page: 1</CoinTableRowText>
                </TableNav>
            </ContentWrapper>
        </Wrapper>
    )
}

export default TableFilters;