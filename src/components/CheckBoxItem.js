import * as React from 'react';
import Checkbox from 'material-ui/Checkbox';

class CheckBoxItem extends React.Component {
  state = {
    checked: false,
  };

  updateCheckboxDate = () => {
    const { label, updateArrayField } = this.props;
    const { checked } = this.state;

    updateArrayField('checkbox', { label, checked });
  };

  toggleCheck = async () => {
    await this.setState(prevState => {
      return {
        checked: !prevState.checked,
      };
    });

    this.updateCheckboxDate();
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
