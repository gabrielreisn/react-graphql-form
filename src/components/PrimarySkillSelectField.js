import * as React from 'react';
import {connect} from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import * as FormSelector from '../selectors/FormSelector';
import * as FormAction from '../actions/FormAction';

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

class PrimarySkillSelectField extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.props.setPrimarySkill(value);
  }

  render() {
    return (
      <div>
        <SelectField
          hintText={this.props.primary_skill ? this.props.primary_skill.label : ''}
          style={textFieldStyle.rootElement}
          onChange={this.handleChange}
          value={this.props.getPrimarySkill}
          selectedMenuItemStyle={selectedMenuItemStyle}
          labelStyle={labelStyle}>
          {this.props.primary_skill
            ? this.props.primary_skill.options.map((data, i) => <MenuItem value={data} primaryText={data} key={i} />)
            : ''}
        </SelectField>
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(PrimarySkillSelectField);
