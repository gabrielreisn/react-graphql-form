import * as React from 'react';
import {connect} from 'react-redux';
import DatePicker from 'material-ui/DatePicker';

import * as FormSelector from '../selectors/FormSelector';
import * as FormAction from '../actions/FormAction';

const textFieldStyle = {
  rootElement: {
    width: '75%',
    marginBottom: '30px',
    marginTop: '20px',
  },
};

class StartDate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <DatePicker hintText={this.props.hintText} textFieldStyle={textFieldStyle.rootElement} />;
  }
}

const mapStateToProps = function(store, ownProps) {
  return {
    your_name: FormSelector.getYourName(store),
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    setYourName: param => {
      return dispatch(FormAction.setYourName(param));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartDate);
