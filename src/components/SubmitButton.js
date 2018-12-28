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

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    try {
      const name = this.props.getYourName;
      const bio = this.props.getYourBio;
      const primary_skill = this.props.getPrimarySkill;
      const jsLibrary = this.props.getJavascriptLibraryOfChoice;
      const additionalExp = this.props.getAdditionalExperience;
      const start_date = this.props.getStartDate;

      await this.props.PipefyMutation({
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
  }

  render() {
    return (
      <RaisedButton
        label={this.props.label ? this.props.label : 'submit'}
        backgroundColor={'#0081ff'}
        labelColor={'#ffffff'}
        style={submitButtonStyle}
        onClick={this.handleClick}
      />
    );
  }
}

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
