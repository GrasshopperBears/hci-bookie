import React from 'react';
import styled from 'styled-components';
import { Grid, List, Typography } from '@material-ui/core';
import ShareboardUserTab from './ShareboardUserTab';

const ShareboardUserList = ({ users, filter, filterUser }) => {
  return (
    <Wrapper>
      <Typography>Filter by user | </Typography>
      <List style={{ marginLeft: '20px' }}>
        <Grid container direction='row' justify='flex-start' spacing='2'>
          {users.map((user) => (
            <Grid item button alignItems='center'>
              <ShareboardUserTab user={user} filter={filter} selected={user.uid === filterUser} />
            </Grid>
          ))}
        </Grid>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 10px;
`;

export default ShareboardUserList;
