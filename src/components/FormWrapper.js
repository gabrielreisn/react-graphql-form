import * as React from 'react';
import styled from 'styled-components';

import LeftBox from './LeftBox';
import TextInputField from './TextInputField';
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
  const { getFormData, setFormData } = props;
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
        <TextInputField
          typeField="name"
          hintText={ShortTextField}
          setFormData={setFormData}
        />

        <TextInputField
          typeField="bio"
          hintText={LongTextField}
          setFormData={setFormData}
        />

        <PrimarySkillSelectField
          primarySkill={SelectField}
          getFormData={getFormData}
          setFormData={setFormData}
        />

        <JsLibraryRadioButton
          jsLibrary={RadioVerticalField}
          setFormData={setFormData}
        />

        <CheckboxContainer
          checklistField={ChecklistVerticalField}
          setFormData={setFormData}
        />

        <StartDate hintText={DateField} setFormData={setFormData} />

        <SubmitButton label={submitButtonText} />
      </PaperStyle>
    </ItemWrapper>
  );
};

export default FormWrapper;
