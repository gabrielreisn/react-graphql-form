import * as React from 'react';
import { connect } from 'react-redux';
import Checkbox from 'material-ui/Checkbox';

import * as FormAction from '../store/FormAction';

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

    const { label, setAdditionalExperience } = this.props;
    const { checked } = this.state;

    const checkBoxInfo = {
      label,
      value: checked,
    };

    setAdditionalExperience(checkBoxInfo);
  };

  render() {
    const { label } = this.props;
    const { checked } = this.state;
    return (
      <Checkbox label={label} checked={checked} onCheck={this.toggleCheck} />
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
