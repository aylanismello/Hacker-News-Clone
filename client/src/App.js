import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import SearchLink from "./components/SearchLink";
import LinksList from "./components/LinksList";
import logo from "./logo.svg";
import "./App.css";

const LINKS = gql`
  {
    links {
      id
      title
      url
    }
  }
`;

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
  // const queryLinks = () => {
  //   const { data, loading, error } = useQuery(LINKS);
  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error :(</p>;
  //   if (!data) return <p>Not found</p>;
  //   return { data, loading, error };
  // }

  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log(query);
  });

  //  const { data, loading, error } = useQuery(LINKS);
  const { data, loading, error } = useQuery(SEARCH_LINKS, {
    variables: { query },
  });
  console.log(`fetch data with ${query}`);
  // console.log(data);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  // if (!data || !data.links) return <p>Not found</p>;

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Hacker News Clone 👨‍👨‍👧‍👧</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <SearchLink setQuery={setQuery} />
        <LinksList data={data} loading={loading} error={error} />
      </Container>
    </div>
  );
}

export default App;
