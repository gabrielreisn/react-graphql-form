/* @flow */

import * as React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
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
  height: '80vh',
  margin: 'auto 20px',
  backgroundColor: 'white',
  borderRadius: '8px',
};

const textFieldStyle = {
  rootElement: {
    width: '75%',
    marginBottom: '40px',
    marginTop: '20px',
  },
};

const ItemWrapper = styled.div`
  display: flex;
  padding: 5vh;
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
            <div>Your Name</div>
            <TextField hintText="Your name" fullWidth={true} style={textFieldStyle.rootElement} />
          </div>

          <div>
            <div>Your Bio</div>
            <TextField hintText="Your bio" fullWidth={true} style={textFieldStyle.rootElement} multiLine={true} />
          </div>
          <div>
            <div>Primary Skill</div>
            <SelectField floatingLabelText="">
              <MenuItem value={1} primaryText="Front-end" />
              <MenuItem value={2} primaryText="Back-end" />
              <MenuItem value={3} primaryText="Full-stack" />
              <MenuItem value={4} primaryText="UI/UX Design" />
            </SelectField>
          </div>
          <div>
            <div>Javascript libery of choice</div>
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
              <RadioButton value="light" label="React" />
              <RadioButton value="not_light" label="Angular" />
              <RadioButton value="ludicrous" label="Vue" />
            </RadioButtonGroup>
          </div>

          <div>
            <div>Additional Experience</div>
            <Checkbox label="TDD" checked={false} />
            <Checkbox label="Heroku" checked={false} />
            <Checkbox label="Github" checked={false} />
          </div>
          <div>
            <div>Start Date</div>
            <DatePicker hintText="Portrait Inline Dialog" />
          </div>
          <RaisedButton label="Submit" backgroundColor={'#0081ff'} labelColor={'white'} />
        </div>
      </ItemWrapper>
    );
  }
}

export default TodoContainer;
