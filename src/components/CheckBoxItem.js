import * as React from 'react';
import { connect } from 'react-redux';
import Checkbox from 'material-ui/Checkbox';

import * as FormAction from '../store/FormAction';

class CheckBoxItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };

    this.updateCheck = this.updateCheck.bind(this);
  }

  updateCheck() {
    let oldState = !this.state.checked;
    this.setState({
      checked: oldState,
    });

    let checkBoxInfo = {
      label: this.props.label,
      value: oldState,
    };

    this.props.setAdditionalExperience(checkBoxInfo);
  }

  render() {
    return (
      <Checkbox
        label={this.props.label}
        checked={this.state.checked}
        onCheck={this.updateCheck}
      />
    );
  }
}

const mapStateToProps = function(store, ownProps) {
  return {};
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    setAdditionalExperience: param => {
      return dispatch(FormAction.setAdditionalExperience(param));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxItem);
