/* @flow */

import * as React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import styled from 'styled-components';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

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
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('props data', this.props.javascript_library_of_choice);
    return (
      <ItemWrapper>
        <LeftInfoBox>
          <InfoBoxHeader>{this.props.organizationName ? this.props.organizationName : ''}</InfoBoxHeader>
          <InfoBoxText>{this.props.title ? this.props.title : ''}</InfoBoxText>
        </LeftInfoBox>

        <div style={paperStyle}>
          <div>
            <TextField
              hintText={this.props.your_name ? this.props.your_name.label : ''}
              fullWidth={true}
              style={textFieldStyle.rootElement}
            />
          </div>

          <div>
            <TextField
              hintText={this.props.your_bio ? this.props.your_bio.label : ''}
              fullWidth={true}
              style={textFieldStyle.rootElement}
              multiLine={true}
            />
          </div>
          <div>
            <SelectField
              hintText={this.props.primary_skill ? this.props.primary_skill.label : ''}
              style={textFieldStyle.rootElement}>
              {this.props.primary_skill
                ? this.props.primary_skill.options.map((data, i) => (
                  <MenuItem value={data} primaryText={data} key={i} />
                ))
                : ''}
            </SelectField>
          </div>
          <div style={divWrapper}>
            <TextHeaderWrapper>
              {this.props.javascript_library_of_choice ? this.props.javascript_library_of_choice.label : ''}
            </TextHeaderWrapper>

            <RadioButtonGroup name="shipSpeed" defaultSelected={'light'} style={radioButtonGrouprStyle}>
              <RadioButton value="light" label="React" />
              <RadioButton value="not_light" label="Angular" />
              <RadioButton value="ludicrous" label="Vue" />
              {/*
              {this.props.javascript_library_of_choice
                ? this.props.javascript_library_of_choice.options.map((data, i) => (
                    <RadioButton value={i} label={data} key={i} />
                  ))
                : ''}
                */}
            </RadioButtonGroup>
          </div>

          <div style={divWrapper}>
            <TextHeaderWrapper>
              {this.props.additional_experience ? this.props.additional_experience.label : ''}
            </TextHeaderWrapper>
            <div style={radioButtonGrouprStyle}>
              {this.props.additional_experience
                ? this.props.additional_experience.options.map((data, i) => (
                  <Checkbox label={data} key={i} checked={false} />
                ))
                : ''}
            </div>
          </div>
          <div>
            <DatePicker
              hintText={this.props.start_date ? this.props.start_date.label : ''}
              textFieldStyle={textFieldStyle.rootElement}
            />
          </div>
          <RaisedButton
            label={this.props.submitButtonText ? this.props.submitButtonText : 'submit'}
            backgroundColor={'#0081ff'}
            labelColor={'white'}
            style={submitButtonStyle}
          />
        </div>
      </ItemWrapper>
    );
  }
}

const PIPEFY_QUERY = gql`
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
`;

export default graphql(PIPEFY_QUERY, {
  props: ({ data }) => {
    if (data.loading) {
      return {
        loading: data.loading,
      };
    }

    if (data.error) {
      return {
        error: data.error,
      };
    }

    return {
      loading: false,

      formFields: data.publicForm.formFields,
      publicFormSettings: data.publicForm.publicFormSettings,

      organizationName: data.publicForm.publicFormSettings.organizationName,
      submitButtonText: data.publicForm.publicFormSettings.submitButtonText,
      title: data.publicForm.publicFormSettings.title,

      your_name: data.publicForm.formFields[0],
      your_bio: data.publicForm.formFields[1],
      primary_skill: data.publicForm.formFields[2],
      javascript_library_of_choice: data.publicForm.formFields[3],
      additional_experience: data.publicForm.formFields[4],
      start_date: data.publicForm.formFields[5],
    };
  },
})(TodoContainer);
