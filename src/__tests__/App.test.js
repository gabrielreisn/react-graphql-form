import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';

import App from '../components/App';
import LeftBox from '../components/LeftBox';
import { shallow } from 'enzyme';


import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import { PIPEFY_QUERY, FormContainer } from '../components/FormContainer';


Enzyme.configure({ adapter: new Adapter() });

/*
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const cache = new InMemoryCache({fragmentMatcher});

const link = createHttpLink({
  uri: 'https://cors-anywhere.herokuapp.com/https://app.pipefy.com/public_api',
});

const client = new ApolloClient({});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
*/

describe('App component', () => {
  it('should render <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});

describe('LeftBox component', () => {
  it('should render <LeftBox /> component with props', () => {
    const wrapper = shallow(<LeftBox organizationName={'Pipefy Recruitment Test'} title={'Recruitment Survey'} />);
    expect(wrapper.instance().props.organizationName).toBe('Pipefy Recruitment Test')
    expect(wrapper.instance().props.title).toBe('Recruitment Survey')
    expect(wrapper).toHaveLength(1);
  });
});




