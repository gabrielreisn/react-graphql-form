import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const submitButtonStyle = {
  marginBottom: '40px',
  width: '75%',
};

const SubmitButton = ({ getFormFullData, fieldsAmount, label }) => {
  /** 
   * destructuring props to use ate mutation!
  const {
    bio,
    checkbox,
    jsLibrary,
    name,
    primarySkill,
    date,
  } = getFormFullData;
  */

  const validadeForm = (objectMap, amount) => {
    const fields = Object.values(objectMap).map(ob => !!ob);

    return fields.length === amount && !fields.includes(false);
  };
  // const handleClick = async () => {
  //   try {
  //     // gotta remove this!
  //     const name = props.getYourName;
  //     const bio = props.getYourBio;
  //     const primary_skill = props.getPrimarySkill;
  //     const jsLibrary = props.getJavascriptLibraryOfChoice;
  //     const additionalExp = props.getAdditionalExperience;
  //     const start_date = props.getStartDate;

  //     await props.PipefyMutation({
  //       variables: {
  //         name,
  //         bio,
  //         primary_skill,
  //         jsLibrary,
  //         additionalExp,
  //         start_date,
  //       },
  //     });
  //     alert('Form submitted successfully');
  //   } catch (e) {
  //     alert('Error in submitting form');
  //   }
  // };

  const shouldDisable = !validadeForm(getFormFullData, fieldsAmount);
  return (
    <RaisedButton
      label={label}
      backgroundColor="#0081ff"
      labelColor="#ffffff"
      style={submitButtonStyle}
      disabled={shouldDisable}
      //onClick={validadeForm}
    />
  );
};

export default SubmitButton;
