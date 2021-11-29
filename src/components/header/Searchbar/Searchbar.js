import axios from "axios";
import React from "react";
import { SearchResults } from "components";
import { Wrapper, Icon, Input } from "./Searchbar.styles"

export default class Searchbar extends React.Component {
    state = {
        searchTerm: "",
        allTokens: [],
        results: []
    }

    getAllTokens = async () => {
        const { data } = await axios("https://api.coingecko.com/api/v3/coins/list")
        this.setState({ allTokens: data })
    }

    filterNames = (query) => {
        const results = this.state.allTokens.filter(token => (token.id.includes(query) || token.name.includes(query) || token.symbol.includes(query)))
        this.setState({results: results})
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})

        if (e.target.value.length > 2) {
            this.filterNames(e.target.value)
        }
        else 
            this.setState({results: []})
    }

    componentDidMount() {
        this.getAllTokens()
    }

    render() {
        return (
            <Wrapper onSubmit={(e) => e.preventDefault()}>
                <Icon src="icons/search.svg"/>
                <Input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.searchTerm} />
                <SearchResults results={this.state.results}/>
            </Wrapper>
        )
    }
}
