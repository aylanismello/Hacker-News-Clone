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

const SearchLink = ({ setQuery }) => {
  const [value, setValue] = useState("");
  
  // const { data, loading, error } = useQuery(SEARCH_LINKS, {
  //   variables: { query: "title" },
  // });
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  // if (!data) return <p>Not found</p>;

  // console.log("i am jesus");
  // console.log(data);

  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(value);
          // debugger;
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

export default SearchLink;
