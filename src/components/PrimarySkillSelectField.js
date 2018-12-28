import * as React from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import * as FormSelector from '../store/FormSelector';
import * as FormAction from '../store/FormAction';

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

const PrimarySkillSelectField = props => {
  const handleChange = event => {
    props.setPrimarySkill(event.target.innerText);
  };

  return (
    <div>
      <SelectField
        hintText={props.primary_skill ? props.primary_skill.label : ''}
        style={textFieldStyle.rootElement}
        onChange={handleChange}
        value={props.getPrimarySkill}
        selectedMenuItemStyle={selectedMenuItemStyle}
        labelStyle={labelStyle}
      >
        {props.primary_skill
          ? props.primary_skill.options.map((data, i) => (
              <MenuItem value={data} primaryText={data} key={i} />
            ))
          : ''}
      </SelectField>
    </div>
  );
};

const mapStateToProps = function(store, ownProps) {
  return {
    getPrimarySkill: FormSelector.getPrimarySkill(store),
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    setPrimarySkill: param => {
      return dispatch(FormAction.setPrimarySkill(param));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PrimarySkillSelectField
);
