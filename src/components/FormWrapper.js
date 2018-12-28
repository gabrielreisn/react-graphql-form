import * as React from 'react';
import styled from 'styled-components';

import LeftBox from './LeftBox';
import BioTextInput from './BioTextInput';
import NameTextInput from './NameTextInput';
import PrimarySkillSelectField from './PrimarySkillSelectField';
import CheckboxContainer from './CheckboxContainer';
import JsLibraryRadioButton from './JsLibraryRadioButton';
import StartDate from './StartDate';
import SubmitButton from './SubmitButton';

const PaperStyle = styled.div`
  width: 35%;
  height: 90vh;
  margin: auto 20px;
  background-color: white;
  border-radius: 8px;
  overflow-y: auto;
`;

const ItemWrapper = styled.div`
  display: flex;
  padding: 5vh;
`;

const FormWrapper = props => {
  const {
    organizationName,
    submitButtonText,
    title,
  } = props.publicFormSettings;
  const {
    ChecklistVerticalField,
    DateField,
    LongTextField,
    RadioVerticalField,
    SelectField,
    ShortTextField,
  } = props.formFields;
  return (
    <ItemWrapper>
      <LeftBox organizationName={organizationName} title={title} />
      <PaperStyle>
        <NameTextInput hintText={ShortTextField} multiLine={false} />

        <BioTextInput hintText={LongTextField} multiLine={true} />

        <PrimarySkillSelectField primary_skill={SelectField} />

        <JsLibraryRadioButton
          javascript_library_of_choice={RadioVerticalField}
        />

        <CheckboxContainer data={ChecklistVerticalField} />

        <StartDate hintText={DateField.label} />

        <SubmitButton label={submitButtonText} />
      </PaperStyle>
    </ItemWrapper>
  );
};

export default FormWrapper;
