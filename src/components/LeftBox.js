import * as React from 'react';
import styled from 'styled-components';

const LeftInfoBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 8px;
  margin: 0 5px auto 20%;
`;

const InfoBoxHeader = styled.div`
  color: #0081ff;
  font-size: 22px;
  text-align: left;
  font-weight: bold;
  margin: 10px 10px 0 10px;
`;

const InfoBoxText = styled.div`
  color: #293e52;
  font-size: 22px;
  text-align: left;
  font-weight: bold;
  margin: 10px 10px 0 10px;
`;


class LeftBox extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render () {
        return(
            <LeftInfoBox>
                <InfoBoxHeader>{this.props.organizationName ? this.props.organizationName : ''}</InfoBoxHeader>
                <InfoBoxText>{this.props.title ? this.props.title : ''}</InfoBoxText>
            </LeftInfoBox>
        );
    }
}

export default LeftBox;