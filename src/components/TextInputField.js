import * as React from 'react';
import TextField from 'material-ui/TextField';

const textFieldStyle = {
  rootElement: {
    width: '75%',
    marginBottom: '30px',
    marginTop: '20px',
  },
};

const TextInputField = ({ setFormData, hintText, typeField }) => {
  const handleChange = event => {
    setFormData(typeField, event.target.value);
  };

  return (
    <TextField
      hintText={hintText.label}
      fullWidth
      style={textFieldStyle.rootElement}
      multiLine
      onChange={handleChange}
    />
  );
};

export default TextInputField;
