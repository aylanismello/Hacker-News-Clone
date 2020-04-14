import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";
import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000",
});

// client
//   .query({
//     query: gql`
//       {
//         links {
//           id
//           title
//           url
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    {" "}
    <App />{" "}
  </ApolloProvider>,
  document.getElementById("root")
);
