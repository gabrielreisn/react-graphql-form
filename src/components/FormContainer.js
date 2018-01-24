/* @flow */

import * as React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import LeftBox from './LeftBox';
import BioTextInput from './BioTextInput';
import NameTextInput from './NameTextInput';
import PrimarySkillSelectField from './PrimarySkillSelectField';
import CheckboxContainer from './CheckboxContainer';
import JsLibraryRadioButton from './JsLibraryRadioButton';
import StartDate from './StartDate';

import styled from 'styled-components';

import {graphql} from 'react-apollo';
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

const submitButtonStyle = {
  marginBottom: '40px',
  width: '75%',
};

const ItemWrapper = styled.div`
  display: flex;
  padding: 5vh;
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
    return (
      <div>
        {this.props.loading ? (
          ''
        ) : (
          <ItemWrapper>
            <LeftBox organizationName={this.props.organizationName} title={this.props.title} />

            <div style={paperStyle}>
              <NameTextInput hintText={this.props.your_name} multiLine={false} />
              <BioTextInput hintText={this.props.your_bio} multiLine={true} />
              <PrimarySkillSelectField primary_skill={this.props.primary_skill} />
              <JsLibraryRadioButton javascript_library_of_choice={this.props.javascript_library_of_choice} />

              <CheckboxContainer data={this.props.additional_experience} />

              <StartDate hintText={this.props.start_date.label} />

              <RaisedButton
                label={this.props.submitButtonText ? this.props.submitButtonText : 'submit'}
                backgroundColor={'#0081ff'}
                labelColor={'white'}
                style={submitButtonStyle}
              />
            </div>
          </ItemWrapper>
        )}
      </div>
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
  props: ({data}) => {
    if (data.loading) {
      return {
        loading: data.loading,
      };
    }

    if (data.error) {
      alert('Error! Something went wrong :(');
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
