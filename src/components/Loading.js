import React from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export default Loading;
