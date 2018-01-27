import React from 'react';
import ReactDOM from 'react-dom';

import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';

import configureStore from 'redux-mock-store';

import App from '../components/App';
import LeftBox from '../components/LeftBox';

import ConnectedBioTextInput, {BioTextInput} from '../components/BioTextInput';
import ConnectedNameTextInput, {NameTextInput} from '../components/NameTextInput';
import ConnectedPrimarySkillSelectField, {PrimarySkillSelectField} from '../components/PrimarySkillSelectField';
import ConnectedJsLibraryRadioButton, {JsLibraryRadioButton} from '../components/JsLibraryRadioButton';
import ConnectedStartDate, {StartDate} from '../components/StartDate';

import * as FormAction from '../actions/FormAction';

import {shallow} from 'enzyme';

describe('App component', () => {
  it('should render <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('LeftBox component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LeftBox organizationName={'Pipefy Recruitment Test'} title={'Recruitment Survey'} />);
  });

  it('should render <LeftBox /> component', () => {
    expect(wrapper).toHaveLength(1);
  });
  it('should contains component props', () => {
    expect(wrapper.instance().props.organizationName).toBe('Pipefy Recruitment Test');
    expect(wrapper.instance().props.title).toBe('Recruitment Survey');
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('BioTextInput component', () => {
  const initialState = {your_bio: 'web developer trying to improve personal skills'};
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<ConnectedBioTextInput store={store} />);
  });

  it('should render connected <BioTextInput /> component', () => {
    expect(container).toHaveLength(1);
  });

  it('should match component props with initialState(store)', () => {
    expect(container.prop('your_bio')).toEqual(initialState.your_bio);
    expect(container).toMatchSnapshot();
    expect(container).toHaveLength(1);
  });
});

describe('NameTextInput component', () => {
  const initialState = {your_name: 'Gabriel Reis'};
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<ConnectedNameTextInput store={store} />);
  });

  it('should render connected <NameTextInput /> component', () => {
    expect(container).toHaveLength(1);
  });

  it('should match component props with initialState(store)', () => {
    expect(container.prop('your_name')).toEqual(initialState.your_name);
    expect(container).toMatchSnapshot();
    expect(container).toHaveLength(1);
  });
});

describe('PrimarySkillSelectField component', () => {
  const initialState = {primary_skill: 'Functional Programming'};
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<ConnectedPrimarySkillSelectField store={store} />);
  });

  it('should render connected <PrimarySkillSelectField /> component', () => {
    expect(container).toHaveLength(1);
  });

  it('should match component props with initialState(store)', () => {
    expect(container.prop('getPrimarySkill')).toEqual(initialState.primary_skill);
    expect(container).toMatchSnapshot();
    expect(container).toHaveLength(1);
  });
});

describe('JsLibraryRadioButton component', () => {
  const initialState = {javascript_library_of_choice: 'React'};
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<ConnectedJsLibraryRadioButton store={store} />);
  });

  it('should render connected <PrimarySkillSelectField /> component', () => {
    expect(container).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });

  it('should match dispatch action', () => {
    let action;
    store.dispatch(FormAction.setJavascriptLibraryOfChoice('React'));
    action = store.getActions();
    expect(action[0].type).toBe('SET_JAVASCRIPT_LIBRARY_OF_CHOICE');
  });
});

describe('StartDate component', () => {
  const initialState = {start_date: '01/01/2018'};
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<ConnectedStartDate store={store} />);
  });

  it('should render connected <StartDate /> component', () => {
    expect(container).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });

  it('should match dispatch action', () => {
    let action;
    store.dispatch(FormAction.setStartDate('React'));
    action = store.getActions();
    expect(action[0].type).toBe('SET_START_DATE');
  });
});
