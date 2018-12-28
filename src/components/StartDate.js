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

const StartDate = props => {
  const handleDate = (event, value) => {
    props.setStartDate(value);
  };

  return (
    <DatePicker
      hintText={props.hintText}
      textFieldStyle={textFieldStyle.rootElement}
      onChange={handleDate}
    />
  );
};

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
