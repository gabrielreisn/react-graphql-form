import * as React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import styled from 'styled-components';

const divWrapper = {
  margin: '20px 0',
};

const radioButtonGrouprStyle = {
  display: 'table',
  marginLeft: '12%',
  textAlign: 'left',
};

const TextHeaderWrapper = styled.div`
  color: #293e52;
  margin-left: 12%;
  text-align: left;
  font-weight: 600;
  margin-bottom: 4px;
`;

const JsLibraryRadioButton = ({
  setFormData,
  jsLibrary: { label, options },
}) => {
  const handleChange = (event, value) => {
    setFormData('jsLibrary', value);
  };

  return (
    <div style={divWrapper}>
      <TextHeaderWrapper>{label}</TextHeaderWrapper>

      <RadioButtonGroup
        name="js library options"
        style={radioButtonGrouprStyle}
        onChange={handleChange}
      >
        {options.map((optionLabel, i) => (
          <RadioButton value={optionLabel} label={optionLabel} key={i} />
        ))}
      </RadioButtonGroup>
    </div>
  );
};

export default JsLibraryRadioButton;
