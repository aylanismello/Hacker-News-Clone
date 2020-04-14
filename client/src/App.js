import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { useQueryParam, StringParam } from "use-query-params";
import { gql } from "apollo-boost";
import './App.css';
import SearchLinks from "./components/SearchLinks";
import LinksList from "./components/LinksList";
import AddLink from "./components/AddLink";

const SEARCH_LINKS = gql`
  query SearchLinks($query: String) {
    searchLinks(query: $query) {
      id
      title
      url
    }
  }
`;

function App() {
  const [query, setQuery] = useQueryParam("query", StringParam);

  const { data, loading, error, refetch } = useQuery(SEARCH_LINKS, {
    variables: { query: query || "" },
  });

  useEffect(() => {
    refetch();
  });

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Link id="HeaderLink" to="/">
            <Typography variant="h6">Hacker News Clone 👨‍👨‍👧‍👧</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Container>
        <SearchLinks setQuery={setQuery} />
        <AddLink setQuery={setQuery} />
        <LinksList data={data} loading={loading} error={error} />
      </Container>
    </div>
  );
}

export default App;
