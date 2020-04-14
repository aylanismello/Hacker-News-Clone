import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { TextField, Button, Box } from "@material-ui/core";

const SEARCH_LINKS = gql`
  query SearchLinks($query: String) {
    searchLinks(query: $query) {
      id
      title
      url
    }
  }
`;

const SearchLinks = ({ setQuery }) => {
  const [value, setValue] = useState("");
  
  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(value);
        }}
        className="SearchLink"
      >
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          id="query-input"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
    </Box>
  );
};

export default SearchLinks;
