import * as React from 'react';
import CheckBoxItem from './CheckBoxItem';

import styled from 'styled-components';

const radioButtonGrouprStyle = {
  display: 'table',
  marginLeft: '12%',
  textAlign: 'left',
};

const divWrapper = {
  margin: '20px 0',
};

const TextHeaderWrapper = styled.div`
  color: #293e52;
  margin-left: 12%;
  text-align: left;
  font-weight: 600;
  margin-bottom: 4px;
`;

class CheckboxContainer extends React.Component {
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
      <div style={divWrapper}>
        <TextHeaderWrapper>{this.props.data ? this.props.data.label : ''}</TextHeaderWrapper>
        <div style={radioButtonGrouprStyle}>
          {this.props.data ? this.props.data.options.map((data, i) => <CheckBoxItem label={data} key={i} />) : ''}
        </div>
      </div>
    );
  }
}

export default CheckboxContainer;
