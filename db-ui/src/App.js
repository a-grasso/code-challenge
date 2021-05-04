import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client';
import {onError} from '@apollo/client/link/error'
import GetStations from './Components/GetStations';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
  if (networkError) {

      alert(`Network error ${networkError.message}`);
  };
  
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://developer.deutschebahn.com/free1bahnql/graphql" }),
]);

// https://developer.deutschebahn.com/free1bahnql/graphql
// https://api.spacex.land/graphql/


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client ={client}>
      {" "}
        <GetStations />
    </ApolloProvider>
  );
}

export default App;
