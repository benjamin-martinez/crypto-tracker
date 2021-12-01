import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { SearchResults } from "components";
import { Wrapper, Icon, Input, ErrorMessage, ErrorMessageWrapper } from "./Searchbar.styles"
import { SearchResultsText } from "styles/Fonts";

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [allTokens, setAllTokens] = useState([])
    const [results, setResults] = useState([])
    const [showResults, setShowResults] = useState(false)
    
    const wrapperRef = useRef();
    useOutsideAlerter(wrapperRef);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    alert("You clicked outside of me!");
                }
            }
    
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const getAllTokens = async () => {
        const { data } = await axios("https://api.coingecko.com/api/v3/coins/list")
        setAllTokens(data)
    }

    const filterNames = (query) => {
        const results = allTokens.filter(token => (token.id.includes(query) || token.name.includes(query) || token.symbol.includes(query)))
        setResults(results)
        setShowResults(true)
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        if (e.target.value.length > 2) {
            filterNames(e.target.value)
        }
        else 
            setResults([])
    }

    const handleLinkClick = () => {
        setSearchTerm("")
        setShowResults(false)
    }

    useEffect(() => {
        getAllTokens()
    }, [])

    return (
        <Wrapper ref={wrapperRef} onSubmit={(e) => e.preventDefault()}>
            <Icon src="icons/search.svg"/>
            <Input type="text" placeholder="Search..." onChange={handleChange} value={searchTerm}/>
            {showResults && (results.length > 0 ? <SearchResults showResults={showResults} results={results} handleLinkClick={handleLinkClick} />
                : <ErrorMessageWrapper>
                    <ErrorMessage>
                    {searchTerm.length < 3 ? <SearchResultsText>Please enter at least 3 characters.</SearchResultsText> : <SearchResultsText>No results found. Try another search.</SearchResultsText>}
                    </ErrorMessage>
                </ErrorMessageWrapper>)}
        </Wrapper>
    )
}

export default Searchbar