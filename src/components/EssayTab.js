import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const EssayTab = ({ essay, user, color }) => {
  return (
    <TabWrap style={{backgroundColor: '#ffffff'}}>
      <Grid container direction='row'>
        <Grid xs={1}>
          <svg width="50" height="50" viewbox= "0 0 50 50">
            <circle cx="25" cy="25" r="15" fill={color}/>
          </svg>
        </Grid>
        <Grid xs={8}>
          <EssayTitle>
            {essay.title}
          </EssayTitle>
        </Grid>
        <Grid xs={3}>
          <EssayWriter>
            {user}
          </EssayWriter>
        </Grid>
      </Grid>
    </TabWrap>
  );
};

const EssayTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  line-height: 50px;
  margin-left: 10px;
  text-align: left;
`;

const EssayWriter = styled.div`
  font-size: 20px;
  font-weight: 600;
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

