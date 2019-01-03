import * as React from 'react';
import DatePicker from 'material-ui/DatePicker';

const textFieldStyle = {
  rootElement: {
    width: '75%',
    marginBottom: '30px',
    marginTop: '20px',
  },
};

const StartDate = ({ setFormData, hintText: { label } }) => {
  const handleDate = (event, value) => {
    setFormData('date', value);
  };

  return (
    <DatePicker
      hintText={label}
      textFieldStyle={textFieldStyle.rootElement}
      onChange={handleDate}
    />
  );
};

export default StartDate;
