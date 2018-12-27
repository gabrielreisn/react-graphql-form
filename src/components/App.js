// @flow

import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FormContainer from '../components/FormContainer';

import styled from 'styled-components';

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
  <AppWrapper>
    <MuiThemeProvider muiTheme={muiTheme}>
      <FormContainer />
    </MuiThemeProvider>
  </AppWrapper>
);

export default React.memo(App);
