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

class PrimarySkillSelectField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectFieldValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({
      selectFieldValue: value,
    });
  }

  render() {
    return (
      <div>
        <SelectField
          hintText={this.props.primary_skill ? this.props.primary_skill.label : ''}
          style={textFieldStyle.rootElement}
          onChange={this.handleChange}
          value={this.state.selectFieldValue}
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

export default PrimarySkillSelectField;
