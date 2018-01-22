import * as React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

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
    return (
      <div style={divWrapper}>
        <TextHeaderWrapper>
          {this.props.javascript_library_of_choice ? this.props.javascript_library_of_choice.label : ''}
        </TextHeaderWrapper>

        <RadioButtonGroup name="shipSpeed" defaultSelected={0} style={radioButtonGrouprStyle}>
          {this.props.javascript_library_of_choice
            ? this.props.javascript_library_of_choice.options.map((data, i) => (
                <RadioButton value={i} label={data} key={i} />
              ))
            : ''}
        </RadioButtonGroup>
      </div>
    );
  }
}

export default JsLibraryRadioButton;
