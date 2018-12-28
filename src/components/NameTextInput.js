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

const NameTextInput = props => {
  const handleChange = event => {
    props.setYourName(event.target.value);
  };

  return (
    <TextField
      hintText={props.hintText ? props.hintText.label : ''}
      fullWidth
      style={textFieldStyle.rootElement}
      multiLine={props.multiLine}
      onChange={handleChange}
      value={props.your_name}
    />
  );
};

const mapStateToProps = function(store, ownProps) {
  return {
    your_name: FormSelector.getYourName(store),
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    setYourName: param => {
      return dispatch(FormAction.setYourName(param));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameTextInput);
