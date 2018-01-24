import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import gql from 'graphql-tag';

import {IntrospectionFragmentMatcher} from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import FormReducer from './redux/FormReducer';

const store = createStore(FormReducer);

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const cache = new InMemoryCache({fragmentMatcher});

const link = createHttpLink({
  uri: 'https://cors-anywhere.herokuapp.com/https://app.pipefy.com/public_api',
});

const client = new ApolloClient({
  cache,
  link: link,
});

client
  .query({
    query: gql`
      {
        publicForm(formId: "1lf_E0x4") {
          publicFormSettings {
            organizationName
            submitButtonText
            title
          }

          formFields {
            ... on ShortTextField {
              id
              label
            }
            ... on LongTextField {
              id
              label
            }
            ... on SelectField {
              id
              label
              options
            }
            ... on RadioVerticalField {
              id
              label
              options
            }
            ... on ChecklistVerticalField {
              id
              label
              options
            }
            ... on DateField {
              id
              label
            }
            __typename
          }
        }
      }
    `,
  })
  .then(response => {
    store.dispatch({type: 'INITIALIZE_STORE', payload: response.data.publicForm});
  });

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
