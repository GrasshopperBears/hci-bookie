import React from 'react';
import styled from 'styled-components';
import { Grid, Avatar } from '@material-ui/core';

const CommentTab = ({ info }) => {

  return (
    <TabWrap style={{ backgroundColor: '#ffffff' }}>
      <Grid container direction='column' alignItems='left'>
        <Grid xs={2}>
          <Writer>{info['name']}</Writer>
        </Grid>
        <Grid xs={8}>
          <Comment>{info['comment']}</Comment>
        </Grid>
      </Grid>
    </TabWrap>
  );
};

const Comment = styled.div`
  font-size: 15px;
  font-weight: 400;
  text-align: left;
`;

const Writer = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const TabWrap = styled.div`
  border-top: 1px solid lightgray;
  width: 95%;
  padding: 15px;
  align-items: center;
  overflow-y: auto;
`;

export default CommentTab;
