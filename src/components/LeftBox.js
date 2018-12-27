// @flow

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

type Props = {
  organizationName: string,
  title: string,
};

const LeftBox = ({ organizationName, title }: Props) => (
  <LeftInfoBox id="left-box">
    <InfoBoxHeader>{organizationName}</InfoBoxHeader>
    <InfoBoxText>{title}</InfoBoxText>
  </LeftInfoBox>
);

export default LeftBox;
