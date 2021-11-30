import axios from "axios";
import React from "react";
import { SearchResults } from "components";
import { Wrapper, Icon, Input, ErrorMessage, ErrorMessageWrapper } from "./Searchbar.styles"
import { SearchResultsText } from "styles/Fonts";

export default class Searchbar extends React.Component {
    state = {
        searchTerm: "",
        allTokens: [],
        results: [],
        showResults: false,
        isMouseOver: false
    }
    
    wrapperRef = React.createRef();
    handleClickOutside = this.handleClickOutside.bind(this);

    getAllTokens = async () => {
        const { data } = await axios("https://api.coingecko.com/api/v3/coins/list")
        this.setState({ allTokens: data })
    }

    filterNames = (query) => {
        const results = this.state.allTokens.filter(token => (token.id.includes(query) || token.name.includes(query) || token.symbol.includes(query)))
        this.setState({results: results, showResults: true})
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})

        if (e.target.value.length > 2) {
            this.filterNames(e.target.value)
        }
        else 
            this.setState({results: []})
    }

    handleMouseOver = () => this.setState({isMouseOver: true})

    handleMouseLeave = () => this.setState({isMouseOver: false})

    handleLinkClick = () => {
        this.setState({searchTerm: "", showResults: false})
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        this.getAllTokens()
    }

    handleClickOutside(event) {
        if (this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            this.setState({showResults: false})
        }
    }

    
    render() {
        return (
            <Wrapper ref={this.wrapperRef} onSubmit={(e) => e.preventDefault()} onMouseOver={() => this.handleMouseOver()} onMouseLeave={() => this.handleMouseLeave()}>
                <Icon src="icons/search.svg"/>
                <Input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.searchTerm} onBlur={() => !this.state.isMouseOver && this.setState({showResults: false})}/>
                {this.state.showResults && (this.state.results.length > 0 ? <SearchResults showResults={this.state.showResults} results={this.state.results} handleLinkClick={this.handleLinkClick} />
                 : <ErrorMessageWrapper>
                        <ErrorMessage>
                        {this.state.searchTerm.length < 3 ? <SearchResultsText>Please enter at least 3 characters.</SearchResultsText> : <SearchResultsText>No results found. Try another search.</SearchResultsText>}
                        </ErrorMessage>
                    </ErrorMessageWrapper>)}
            </Wrapper>
        )
    }
}
