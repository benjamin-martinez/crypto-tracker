import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { debounce } from "lodash";
import { SearchResults } from "components";
import { SearchResultsText } from "styles/Fonts";
import {
  Wrapper,
  Icon,
  Input,
  ErrorMessage,
  ErrorMessageWrapper,
} from "./Searchbar.styles";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const wrapperRef = useRef();
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowResults(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const getFilteredTokens = async (searchTerm) => {
    setIsLoading(true);
    try {
      const { data } = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${searchTerm}`
      );
      setResults(data);
      setShowResults(true);
      setIsLoading(false);
      setHasError(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setHasError(true);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 2) {
      debounce(getFilteredTokens, 500)(e.target.value);
    } else setResults([]);
  };

  const handleLinkClick = () => {
    setSearchTerm("");
    setShowResults(false);
  };

  useEffect(() => {
    if (searchTerm.length < 2) setResults([]);
  }, [searchTerm]);

  return (
    <Wrapper ref={wrapperRef} onSubmit={(e) => e.preventDefault()}>
      <Icon src="icons/search.svg" />
      <Input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchTerm}
      />
      {showResults &&
        (results.length > 0 ? (
          <SearchResults
            showResults={showResults}
            results={results}
            handleLinkClick={handleLinkClick}
          />
        ) : (
          <ErrorMessageWrapper>
            <ErrorMessage>
              {searchTerm.length < 3 ? (
                <SearchResultsText>
                  Please enter at least 3 characters.
                </SearchResultsText>
              ) : (
                <SearchResultsText>
                  No results found. Try another search.
                </SearchResultsText>
              )}
            </ErrorMessage>
          </ErrorMessageWrapper>
        ))}
    </Wrapper>
  );
};

export default Searchbar;
