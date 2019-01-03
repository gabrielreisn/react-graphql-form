import * as React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const textFieldStyle = {
  rootElement: {
    width: '75%',
    marginBottom: '30px',
    marginTop: '20px',
  },
};

const selectedMenuItemStyle = {
  color: '#0081ff',
};

const labelStyle = {
  textAlign: 'left',
};

const PrimarySkillSelectField = ({
  setFormData,
  getFormData,
  primarySkill: { label, options },
}) => {
  const handleChange = event => {
    setFormData('primarySkill', event.target.innerText);
  };

  return (
    <div>
      <SelectField
        hintText={label}
        style={textFieldStyle.rootElement}
        onChange={handleChange}
        value={getFormData('primarySkill')}
        selectedMenuItemStyle={selectedMenuItemStyle}
        labelStyle={labelStyle}
      >
        {options.map((optionLabel, i) => (
          <MenuItem value={optionLabel} primaryText={optionLabel} key={i} />
        ))}
      </SelectField>
    </div>
  );
};

export default PrimarySkillSelectField;
