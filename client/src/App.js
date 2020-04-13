import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
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

function App() {
  const { data, loading, error } = useQuery(LINKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Hacker News Clone 👨‍👨‍👧‍👧</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <div className="LinksList">
          <List>
            <>
              {data.links.map(({ title, url }, idx) => (
                <ListItem>
                  <div key={url}>
                    <ListItemIcon>{idx + 1}</ListItemIcon>
                    <ListItemText>
                      <a href={url}>{title} </a>
                    </ListItemText>
                  </div>
                </ListItem>
              ))}
            </>
          </List>
        </div>
      </Container>
    </div>
  );
}

export default App;
