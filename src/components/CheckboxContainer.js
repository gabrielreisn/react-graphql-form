import * as React from 'react';
import CheckBoxItem from './CheckBoxItem';

import styled from 'styled-components';

const RadioButtonGrouprStyle = styled.div`
  display: table;
  margin-left: 12%;
  text-align: left;
`;

const DivWrapper = styled.div`
  margin: '20px 0';
`;

const TextHeaderWrapper = styled.div`
  color: #293e52;
  margin-left: 12%;
  text-align: left;
  font-weight: 600;
  margin-bottom: 4px;
`;

const CheckboxContainer = ({
  updateArrayField,
  checklistField: { options, label },
}) => (
  <DivWrapper>
    <TextHeaderWrapper>{label}</TextHeaderWrapper>
    <RadioButtonGrouprStyle>
      {options.map((data, i) => (
        <CheckBoxItem
          label={data}
          key={i}
          updateArrayField={updateArrayField}
        />
      ))}
    </RadioButtonGrouprStyle>
  </DivWrapper>
);

export default CheckboxContainer;
