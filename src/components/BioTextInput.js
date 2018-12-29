import * as React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

import * as FormSelector from '../store/FormSelector';
import * as FormAction from '../store/FormAction';

const textFieldStyle = {
  rootElement: {
    width: '75%',
    marginBottom: '30px',
    marginTop: '20px',
  },
};

const BioTextInput = props => {
  const handleChange = event => {
    props.setYourBio(event.target.value);
  };

  return (
    <TextField
      hintText={props.hintText ? props.hintText.label : ''}
      fullWidth={true}
      style={textFieldStyle.rootElement}
      multiLine={props.multiLine}
      onChange={handleChange}
      value={props.your_bio}
    />
  );
};

const mapStateToProps = function(store, ownProps) {
  return {
    your_bio: FormSelector.getYourBio(store),
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    setYourBio: param => {
      return dispatch(FormAction.setYourBio(param));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BioTextInput);
