import * as React from 'react';
import Checkbox from 'material-ui/Checkbox';

class CheckBoxItem extends React.Component {
  state = {
    checked: false,
  };

  toggleCheck = () => {
    this.setState(prevState => {
      return {
        checked: !prevState.checked,
      };
    });

    const { label, setFormData } = this.props;
    const { checked } = this.state;

    const checkBoxInfo = {
      label,
      value: checked,
    };

    setFormData('checkbox', checkBoxInfo);
  };

  render() {
    const { label } = this.props;
    const { checked } = this.state;
    return (
      <Checkbox label={label} checked={checked} onCheck={this.toggleCheck} />
    );
  }
}

export default CheckBoxItem;
