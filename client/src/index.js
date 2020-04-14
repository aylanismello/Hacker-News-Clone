import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:4000",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <App />
      </QueryParamProvider>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);