import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import ShareboardUserTab from './ShareboardUserTab';

const ShareboardUserList = ({ userList, colorList }) => {
  return (
    <Wrapper>
      <Grid container direction='row' justify='flex-start' spacing='4'>
        {userList.map((user, index) => (
          <Grid item button alignItems='center'>
            <ShareboardUserTab name={user} color={colorList[index]} />
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
