import React from 'react';
import styled from 'styled-components';
import { Divider, Button } from '@material-ui/core';
import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';

const AuthIcons = ({ googleHandler, githubHandler }) => {
  return (
    <AuthIconsWrapper>
      <Button onClick={googleHandler} startIcon={<FcGoogle size='60' />}>
        Google
      </Button>
      <Divider orientation='vertical' flexItem />
      <Button onClick={githubHandler} startIcon={<SiGithub size='60' color='#6f42c1' />}>
        GitHub
      </Button>
    </AuthIconsWrapper>
  );
};

const AuthIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    margin-right: 20px;
  }

  span {
    padding: 0 20px;
    margin: 7px 0;
  }
`;

export default AuthIcons;
