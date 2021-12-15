import React, { useEffect, useState, useRef } from "react";
import { debounce } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { clearSearchResults, getSearchResults } from "store/portfolio/actions";
import { SearchResults } from "components/portfolio-page";
import { SearchResultsText } from "styles/Fonts";
import {
  Wrapper,
  Input,
  ErrorMessage,
  ErrorMessageWrapper,
} from "./SearchAsset.styles";

const SearchAsset = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const results = useSelector((state) => state.portfolio.portfolioSearchData);
  const isLoading = useSelector((state) => state.portfolio.isLoading);
  const hasError = useSelector((state) => state.portfolio.hasError);
  const dispatch = useDispatch();

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

  const getFilteredTokens = (searchTerm) => {
    dispatch(getSearchResults(searchTerm));
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 2) {
      debounce(getFilteredTokens, 1000)(e.target.value);
    } else {
      dispatch(clearSearchResults());
      setShowResults(false);
    }
  };

  const handleLinkClick = () => {
    setSearchTerm("");
    setShowResults(false);
  };

  useEffect(() => {
    if (results && results.length > 0) {
      setShowResults(true);
    }
  }, [results]);

  useEffect(() => {
    setShowResults(false);
  }, [])

  return (
    <Wrapper ref={wrapperRef} onSubmit={(e) => e.preventDefault()}>
      <Input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchTerm}
      />
      {showResults &&
        (results ? (
          <SearchResults
            showResults={showResults}
            results={results}
            handleLinkClick={handleLinkClick}
          />
        ) : (
          <ErrorMessageWrapper>
            <ErrorMessage>
              {isLoading ? (
                <SearchResultsText>Loading. Please wait...</SearchResultsText>
              ) : searchTerm.length < 3 ? (
                <SearchResultsText>
                  Please enter at least 3 characters.
                </SearchResultsText>
              ) : (
                !results && (
                  <SearchResultsText>
                    No results found. Try another search.
                  </SearchResultsText>
                )
              )}
            </ErrorMessage>
          </ErrorMessageWrapper>
        ))}
    </Wrapper>
  );
};

export default SearchAsset;
