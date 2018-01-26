import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';

import App from '../components/App';
import LeftBox from '../components/LeftBox';
import { BioTextInput } from '../components/BioTextInput';
import { NameTextInput } from '../components/NameTextInput';
import { PIPEFY_QUERY, FormContainer } from '../components/FormContainer';

import { shallow } from 'enzyme';


describe('App component', () => {
  it('should render <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});

describe('LeftBox component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LeftBox organizationName={'Pipefy Recruitment Test'} title={'Recruitment Survey'} />);

  })

  it('should render <LeftBox /> component', () => {

    expect(wrapper).toHaveLength(1);
  });
  it('should contains component props', () => {
    expect(wrapper.instance().props.organizationName).toBe('Pipefy Recruitment Test')
    expect(wrapper.instance().props.title).toBe('Recruitment Survey')

  });
  it('should match snapshot', () => {

    expect(wrapper).toHaveLength(1);
  });
});

describe('BioTextInput component', () => {
  it('should render <BioTextInput /> component with props', () => {
    const wrapper = shallow(<BioTextInput hintText={'your bio'} />);
    expect(wrapper.instance().props.hintText).toBe('your bio')
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});

describe('NameTextInput component', () => {
  it('should render <NameTextInput /> component with props', () => {
    const wrapper = shallow(<NameTextInput hintText={'your name'} />);
    expect(wrapper.instance().props.hintText).toBe('your name')
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});




