import React from 'react';
import { render } from 'react-dom';
import './styles/main.scss';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './graphql/client';
import App from './App';


render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
