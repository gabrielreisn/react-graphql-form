import * as React from 'react';
import TextField from 'material-ui/TextField';

const textFieldStyle = {
  rootElement: {
    width: '75%',
    marginBottom: '30px',
    marginTop: '20px',
  },
};

const NameTextInput = props => {
  const handleChange = event => {
    props.setFormData('name', event.target.value);
  };

  return (
    <TextField
      hintText={props.hintText ? props.hintText.label : ''}
      fullWidth
      style={textFieldStyle.rootElement}
      multiLine={props.multiLine}
      onChange={handleChange}
    />
  );
};

export default NameTextInput;
