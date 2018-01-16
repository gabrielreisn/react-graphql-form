/* @flow */

import * as React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import styled from 'styled-components';

//using external inline-style to minimize re-render problems
const paperStyle = {
  width: '35%',
  height: '90vh',
  margin: 'auto 20px',
  backgroundColor: 'white',
  borderRadius: '8px',
  overflowY: 'auto',
};

const divWrapper = {
  margin: '20px 0',
};

const submitButtonStyle = {
  marginBottom: '40px',
  width: '75%',
};

const radioButtonGrouprStyle = {
  display: 'table',
  marginLeft: '12%',
  textAlign: 'left',
};

const textFieldStyle = {
  rootElement: {
    width: '75%',
    marginBottom: '30px',
    marginTop: '20px',
  },
};

const ItemWrapper = styled.div`
  display: flex;
  padding: 5vh;
`;

const TextHeaderWrapper = styled.div`
  color: #293e52;
  margin-left: 12%;
  text-align: left;
  font-weight: 600;
  margin-bottom: 4px;
`;

const LeftInfoBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 8px;
  margin: 0 5px auto 20%;
`;

const InfoBoxHeader = styled.div`
  color: #0081ff;
  font-size: 22px;
  text-align: left;
  font-weight: bold;
  margin: 10px 10px 0 10px;
`;

const InfoBoxText = styled.div`
  color: #293e52;
  font-size: 22px;
  text-align: left;
  font-weight: bold;
  margin: 10px 10px 0 10px;
`;

type Props = {
  /* ... */
};

type State = {
  /* ... */
};

class TodoContainer extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ItemWrapper>
        <LeftInfoBox>
          <InfoBoxHeader>Pipefy recruitment test</InfoBoxHeader>
          <InfoBoxText>recruitment survey</InfoBoxText>
        </LeftInfoBox>

        <div style={paperStyle}>
          <div>
            <TextField hintText="Your name" fullWidth={true} style={textFieldStyle.rootElement} />
          </div>

          <div>
            <TextField hintText="Your bio" fullWidth={true} style={textFieldStyle.rootElement} multiLine={true} />
          </div>
          <div>
            <SelectField hintText="Primary Skill" style={textFieldStyle.rootElement}>
              <MenuItem value={1} primaryText="Front-end" />
              <MenuItem value={2} primaryText="Back-end" />
              <MenuItem value={3} primaryText="Full-stack" />
              <MenuItem value={4} primaryText="UI/UX Design" />
            </SelectField>
          </div>
          <div style={divWrapper}>
            <TextHeaderWrapper>Javascript libery of choice</TextHeaderWrapper>
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" style={radioButtonGrouprStyle}>
              <RadioButton value="light" label="React" />
              <RadioButton value="not_light" label="Angular" />
              <RadioButton value="ludicrous" label="Vue" />
            </RadioButtonGroup>
          </div>

          <div style={divWrapper}>
            <TextHeaderWrapper>Additional Experience</TextHeaderWrapper>
            <div style={radioButtonGrouprStyle}>
              <Checkbox label="TDD" checked={false} />
              <Checkbox label="Heroku" checked={false} />
              <Checkbox label="Github" checked={false} />
            </div>
          </div>
          <div>
            <DatePicker hintText="Start Date" textFieldStyle={textFieldStyle.rootElement} />
          </div>
          <RaisedButton label="Submit" backgroundColor={'#0081ff'} labelColor={'white'} style={submitButtonStyle} />
        </div>
      </ItemWrapper>
    );
  }
}

export default TodoContainer;
