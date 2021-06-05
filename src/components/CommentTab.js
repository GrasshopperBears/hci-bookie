import React from 'react';
import styled from 'styled-components';
import { Grid, Avatar } from '@material-ui/core';

const CommentTab = ({ info }) => {
  return (
    <TabWrap style={{ backgroundColor: '#ffffff' }}>
      <Grid container direction='column' alignItems='left'>
        <Grid>
          <Writer>{info.displayName}</Writer>
        </Grid>
        <Grid>
          <Comment>{info.text}</Comment>
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
  width: 100%;
`;

const TabWrap = styled.div`
  border-top: 1px solid lightgray;
  width: 95%;
  padding: 15px;
  align-items: center;
  overflow-y: auto;
`;

export default CommentTab;
