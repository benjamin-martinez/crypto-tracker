import React, { useEffect, useState, useRef } from "react";
import { debounce } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { clearSearchResults, getSearchResults } from "store/search/actions";
import { SearchResults } from "components";
import { SearchResultsText } from "styles/Fonts";
import SearchSVG from "media/icons/search.svg";
import {
  Wrapper,
  Icon,
  Input,
  ErrorMessage,
  ErrorMessageWrapper,
} from "./Searchbar.styles";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const results = useSelector((state) => state.search.data);
  const isLoading = useSelector((state) => state.search.isLoading);
  const error = useSelector((state) => state.search.error);
  const hasError = useSelector((state) => state.search.hasError);
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
    if (e.target.value.length > 0) {
      debounce(getFilteredTokens, 1000)(e.target.value);
    } else {
      dispatch(clearSearchResults());
      setShowResults(false);
      setSearchTerm("");
    }
  };

  const handleLinkClick = () => {
    setSearchTerm("");
    setShowResults(false);
    dispatch(clearSearchResults());
  };

  // useEffect(() => {
  //   if (searchTerm.length === 0) {
  //     setSearchTerm("");
  //     setShowResults(false);
  //     dispatch(clearSearchResults());
  //   }
  // }, [searchTerm]);

  useEffect(() => {
    if (results && results.length > 0) {
      setShowResults(true);
    }
    //eslint-disable-next-line
  }, [results]);

  return (
    <Wrapper ref={wrapperRef} onSubmit={(e) => e.preventDefault()}>
      <Icon src={SearchSVG} />
      <Input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchTerm}
      />
      {showResults && results && (
        <SearchResults
          showResults={showResults}
          results={results}
          handleLinkClick={handleLinkClick}
        />
      )}
      {showResults && results.length === 0 && isLoading && (
        <ErrorMessageWrapper>
          <ErrorMessage>
            <SearchResultsText>Loading. Please wait...</SearchResultsText>
          </ErrorMessage>
        </ErrorMessageWrapper>
      )}
      {error && (
        <ErrorMessageWrapper>
          <ErrorMessage>
            <SearchResultsText>
              No results found. Try another search.
            </SearchResultsText>
          </ErrorMessage>
        </ErrorMessageWrapper>
      )}
    </Wrapper>
  );
};

export default Searchbar;
