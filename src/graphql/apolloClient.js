// @flow
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';

import introspectionQueryResultData from './fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const cache = new InMemoryCache({ fragmentMatcher });

const link = createHttpLink({
  uri: 'https://cors-anywhere.herokuapp.com/https://app.pipefy.com/public_api',
});

export const client = new ApolloClient({
  cache,
  link: link,
});
