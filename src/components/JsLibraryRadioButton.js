import * as React from 'react';
import {connect} from 'react-redux';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import * as FormAction from '../actions/FormAction';

import styled from 'styled-components';

const divWrapper = {
  margin: '20px 0',
};

const radioButtonGrouprStyle = {
  display: 'table',
  marginLeft: '12%',
  textAlign: 'left',
};

const TextHeaderWrapper = styled.div`
  color: #293e52;
  margin-left: 12%;
  text-align: left;
  font-weight: 600;
  margin-bottom: 4px;
`;

class JsLibraryRadioButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.props.setJavascriptLibraryOfChoice(value);
  }

  render() {
    return (
      <div style={divWrapper}>
        <TextHeaderWrapper>
          {this.props.javascript_library_of_choice ? this.props.javascript_library_of_choice.label : ''}
        </TextHeaderWrapper>

        <RadioButtonGroup name="js library options" style={radioButtonGrouprStyle} onChange={this.handleChange}>
          {this.props.javascript_library_of_choice
            ? this.props.javascript_library_of_choice.options.map((data, i) => (
                <RadioButton value={data} label={data} key={i} />
              ))
            : ''}
        </RadioButtonGroup>
      </div>
    );
  }
}

const mapStateToProps = function(store, ownProps) {
  return {};
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    setJavascriptLibraryOfChoice: param => {
      return dispatch(FormAction.setJavascriptLibraryOfChoice(param));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JsLibraryRadioButton);
