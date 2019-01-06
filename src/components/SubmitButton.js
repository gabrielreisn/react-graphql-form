import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const submitButtonStyle = {
  marginBottom: '40px',
  width: '75%',
};

const validadeForm = (objectMap, amount) => {
  const fields = Object.values(objectMap).map(ob => !!ob);

  return fields.length === amount && !fields.includes(false);
};

const SubmitButton = ({
  getFormFullData,
  fieldsAmount,
  label,
  formMutation,
}) => {
  const handleClick = async () => {
    const {
      bio,
      checkbox,
      jsLibrary,
      name,
      primarySkill,
      date,
    } = getFormFullData;

    try {
      await formMutation({
        variables: {
          name,
          bio,
          primary_skill: primarySkill,
          jsLibrary: jsLibrary,
          additionalExp: checkbox,
          start_date: date,
        },
      });
      alert('Form submitted successfully');
    } catch (e) {
      alert(`Error in submitting form: ${e}`);
    }
  };

  const shouldDisable = !validadeForm(getFormFullData, fieldsAmount);
  return (
    <RaisedButton
      label={label}
      backgroundColor="#0081ff"
      labelColor="#ffffff"
      style={submitButtonStyle}
      disabled={shouldDisable}
      onClick={handleClick}
    />
  );
};

export default SubmitButton;
