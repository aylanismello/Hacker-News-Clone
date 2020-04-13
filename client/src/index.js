import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import App from "./App";
import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000",
});

client
  .query({
    query: gql`
      {
        launches {
          id
          title
          url
        }
      }
    `,
  })
  .then((result) => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
