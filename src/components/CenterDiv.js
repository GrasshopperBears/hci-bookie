import React from 'react';
import styled from 'styled-components';

const CenterDiv = ({ children }) => {
  return <Div>{children}</Div>;
};

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default CenterDiv;
