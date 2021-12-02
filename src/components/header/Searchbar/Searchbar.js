import React from "react";
import axios from "axios";
import { debounce } from "lodash"
import { SearchResults } from "components";
import { SearchResultsText } from "styles/Fonts";
import { Wrapper, Icon, Input, ErrorMessage, ErrorMessageWrapper } from "./Searchbar.styles"

export default class Searchbar extends React.Component {
    state = {
        searchTerm: "",
        results: [],
        showResults: false,
        isMouseOver: false,
        isLoading: false,
        hasError: false
    }
    wrapperRef = React.createRef();
    handleClickOutside = this.handleClickOutside.bind(this);

    getFilteredTokens = async (searchTerm) => {
        this.setState({isLoading: true})
        try {
            const { data } = await axios(`https://crypto-app-server.herokuapp.com/coins/${searchTerm}`)
            this.setState({ results: data, showResults: true, isLoading: false, hasError: false })
        } catch (err) {
            console.log(err)
            this.setState({isLoading: false, hasError: true})
        }
    }

    // filterNames = (query) => {
    //     const results = this.state.allTokens.filter(token => (token.id.includes(query) || token.name.includes(query) || token.symbol.includes(query)))
    //     this.setState({results: results, showResults: true})
    // }

    handleChange = (e) => {
        const searchTerm = e.target.value
        this.setState({searchTerm: searchTerm})

        if (e.target.value.length > 2) {
            debounce(this.getFilteredTokens,200)(searchTerm)
        }
        else 
            this.setState({results: []})
    }

    handleMouseOver = () => this.setState({isMouseOver: true})

    handleMouseLeave = () => this.setState({isMouseOver: false})

    handleLinkClick = () => {
        this.setState({searchTerm: "", showResults: false})
    }

    handleOnMouseDown = (e) => {
        this.handleClickOutside(e)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.searchTerm !== prevState.searchTerm) {
            if (this.state.searchTerm.length < 3) {
                this.setState({results: []})
            }
        }
    }

    handleClickOutside(event) {
        if (this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            this.setState({showResults: false})
        }
    }

    
    render() {
        return (
            <Wrapper ref={this.wrapperRef} onSubmit={(e) => e.preventDefault()} onMouseOver={() => this.handleMouseOver()} onMouseLeave={() => this.handleMouseLeave()} onMouseDown={this.handleOnMouseDown}>
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
