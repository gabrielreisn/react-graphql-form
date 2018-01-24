import * as React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';

import * as FormSelector from '../selectors/FormSelector';
import * as FormAction from '../actions/FormAction';

const textFieldStyle = {
  rootElement: {
    width: '75%',
    marginBottom: '30px',
    marginTop: '20px',
  },
};

class NameTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.setYourName(event.target.value);
  }

  render() {
    return (
      <div>
        <TextField
          hintText={this.props.hintText ? this.props.hintText.label : ''}
          fullWidth={true}
          style={textFieldStyle.rootElement}
          multiLine={this.props.multiLine}
          onChange={this.handleChange}
          value={this.props.your_name}
        />
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(NameTextInput);
