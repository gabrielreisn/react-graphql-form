import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import gql from 'graphql-tag';

const client = new ApolloClient({
  link: new HttpLink({uri: 'https://app.pipefy.com/public_api'}),
  //link: new HttpLink({uri: 'https://jsonplaceholder.typicode.com'}),
  fetchOptions: {method: 'POST'},
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
