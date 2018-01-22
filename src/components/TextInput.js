import * as React from 'react';
import TextField from 'material-ui/TextField';

const textFieldStyle = {
  rootElement: {
    width: '75%',
    marginBottom: '30px',
    marginTop: '20px',
  },
};

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textFieldValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
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
        />
      </div>
    );
  }
}

export default TextInput;
