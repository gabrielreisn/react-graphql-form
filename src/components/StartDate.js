import * as React from 'react';
import { connect } from 'react-redux';
import DatePicker from 'material-ui/DatePicker';

import * as FormAction from '../store/FormAction';

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
    this.handleDate = this.handleDate.bind(this);
  }

  handleDate(event, value) {
    this.props.setStartDate(value);
  }

  render() {
    return (
      <DatePicker
        hintText={this.props.hintText}
        textFieldStyle={textFieldStyle.rootElement}
        onChange={this.handleDate}
      />
    );
  }
}

const mapStateToProps = function(store, ownProps) {
  return {};
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    setStartDate: param => {
      return dispatch(FormAction.setStartDate(param));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartDate);
