import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import GridList from '@material-ui/core/GridList';
import ShareboardUserTab from './ShareboardUserTab';

const ShareboardUserList = ({userList}) => {
  return (
    <Wrapper>
      <Grid container direction="row" justify="flex-start" spacing="4">
        {userList.map((user) => (
          <Grid item button alignItems="center">
            <ShareboardUserTab name={user} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
    
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 10px;
`;

export default ShareboardUserList;

