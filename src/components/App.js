// @flow

import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import { client } from '../graphql/apolloClient';
import store from '../store';

import FormContainer from '../components/FormContainer';

const AppWrapper = styled.div`
  text-align: center;
  background-color: #e6ecf5;
  height: 100vh;
`;

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#0081ff',
    primary2Color: '#0081ff',
    pickerHeaderColor: '#0081ff',
  },
});

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppWrapper>
        <MuiThemeProvider muiTheme={muiTheme}>
          <FormContainer />
        </MuiThemeProvider>
      </AppWrapper>
    </Provider>
  </ApolloProvider>
);

export default React.memo(App);
