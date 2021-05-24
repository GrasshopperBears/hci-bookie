import React from 'react';
import styled from 'styled-components';
import { Grid, Avatar } from '@material-ui/core';

const EssayTab = ({ info }) => {
  const { title, displayName, profileImg } = info;

  return (
    <TabWrap style={{ backgroundColor: '#ffffff' }}>
      <Grid container direction='row' alignItems='center'>
        <Grid xs={1}>
          <Avatar alt='profile image' src={profileImg || process.env.PUBLIC_URL + '/default-profile.png'} />
        </Grid>
        <Grid xs={8}>
          <EssayTitle>{title}</EssayTitle>
        </Grid>
        <Grid xs={3}>
          <EssayWriter>{displayName}</EssayWriter>
        </Grid>
      </Grid>
    </TabWrap>
  );
};

const EssayTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 50px;
  margin-left: 1.3rem;
  text-align: left;
`;

const EssayWriter = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 50px;
  margin-right: 10px;
  text-align: right;
`;

const TabWrap = styled.div`
  border: 2px solid lightgray;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  padding: 5px;
  align-items: center;
`;

export default EssayTab;
