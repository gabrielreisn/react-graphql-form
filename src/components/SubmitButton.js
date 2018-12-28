import * as React from 'react';
import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';

import RaisedButton from 'material-ui/RaisedButton';

import * as FormSelector from '../store/FormSelector';

import { PIPEFY_MUTATION } from '../graphql/pipefyMutation';

const submitButtonStyle = {
  marginBottom: '40px',
  width: '75%',
};

const SubmitButton = props => {
  const handleClick = async () => {
    try {
      const name = props.getYourName;
      const bio = props.getYourBio;
      const primary_skill = props.getPrimarySkill;
      const jsLibrary = props.getJavascriptLibraryOfChoice;
      const additionalExp = props.getAdditionalExperience;
      const start_date = props.getStartDate;

      await props.PipefyMutation({
        variables: {
          name,
          bio,
          primary_skill,
          jsLibrary,
          additionalExp,
          start_date,
        },
      });
      alert('Form submitted successfully');
    } catch (e) {
      alert('Error in submitting form');
    }
  };

  return (
    <RaisedButton
      label={props.label ? props.label : 'submit'}
      backgroundColor={'#0081ff'}
      labelColor={'#ffffff'}
      style={submitButtonStyle}
      onClick={handleClick}
    />
  );
};

const mapStateToProps = function(store, ownProps) {
  return {
    getYourName: FormSelector.getYourName(store),
    getYourBio: FormSelector.getYourBio(store),
    getPrimarySkill: FormSelector.getPrimarySkill(store),
    getJavascriptLibraryOfChoice: FormSelector.getJavascriptLibraryOfChoice(
      store
    ),
    getAdditionalExperience: FormSelector.getAdditionalExperience(store),
    getStartDate: FormSelector.getStartDate(store),
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {};
};

export default compose(
  graphql(PIPEFY_MUTATION, { name: 'PipefyMutation' }),
  connect(mapStateToProps, mapDispatchToProps)
)(SubmitButton);
