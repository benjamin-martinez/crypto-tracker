import React, { useEffect, useState, useRef } from "react";
import { debounce } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSearchLocation } from "store/search/actions";
import { clearSearchResults, getSearchResults } from "store/search/actions";
import { SearchResults } from "components";
import { SearchResultsText } from "styles/Fonts";
import {
  Wrapper,
  Icon,
  Input,
  ErrorMessage,
  ErrorMessageWrapper,
} from "./SearchAsset.styles";

const SearchAsset = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const results = useSelector((state) => state.search.data);
  const isLoading = useSelector((state) => state.search.isLoading);
  const hasError = useSelector((state) => state.search.hasError);
  const activeSearchLocation = useSelector(state => state.search.activeSearchLocation)
  const dispatch = useDispatch();

  const wrapperRef = useRef();
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowResults(false);
          dispatch(setActiveSearchLocation(""))
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
    dispatch(setActiveSearchLocation(""))
  };

  const handleWrapperClick = () => {
    dispatch(setActiveSearchLocation("portfolio"))
  }

  useEffect(() => {
    if (results && results.length > 0) {
      setShowResults(true);
    }
  }, [results]);

  return (
    <Wrapper ref={wrapperRef} onSubmit={(e) => e.preventDefault()} onClick={handleWrapperClick}>
      <Input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchTerm}
      />
      {showResults &&
        (results && activeSearchLocation === "portfolio" ? (
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
