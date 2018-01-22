import * as React from 'react';
import Checkbox from 'material-ui/Checkbox';

class CheckBoxItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };

    this.updateCheck = this.updateCheck.bind(this);
  }

  updateCheck() {
    this.setState(oldState => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
    return <Checkbox label={this.props.label} checked={this.state.checked} onCheck={this.updateCheck} />;
  }
}

export default CheckBoxItem;
