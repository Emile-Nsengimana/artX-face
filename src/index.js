import React from 'react';
import { render } from 'react-dom';
import './styles/main.scss';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:5000/graphql',
});

const sample = gql`
{
  users{
    lastName
  }
}
`;
// client.query({ query: sample }).then((result) => console.log(result));
render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
