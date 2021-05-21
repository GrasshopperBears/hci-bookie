import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Typography, CardActionArea } from '@material-ui/core';
import { IoMdAdd } from 'react-icons/io';

const MainPageCreateSessionBox = () => {
  const history = useHistory();
  const clickHandler = () => {
    history.push('/session/create');
  };

  return (
    <Wrapper>
      <CardActionArea onClick={clickHandler}>
        <IoMdAdd size='40' />
        <Typography variant='h6' style={{ marginTop: '20px' }}>
          Create session
        </Typography>
      </CardActionArea>
    </Wrapper>
  );
};

const Wrapper = styled(Card)`
  position: block;
  width: 300px;
  height: 600px;
  > button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export default MainPageCreateSessionBox;
