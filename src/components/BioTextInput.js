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

class BioTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.setYourBio(event.target.value);
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
          value={this.props.your_bio}
        />
      </div>
    );
  }
}

const mapStateToProps = function(store, ownProps) {
  return {
    your_bio: FormSelector.getYourBio(store),
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    setYourBio: param => {
      return dispatch(FormAction.setYourBio(param));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BioTextInput);
