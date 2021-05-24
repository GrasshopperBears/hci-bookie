import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const ShareboardUserTab = ({ name, color }) => {
  return (
    <TabWrap>
      <Grid container direction='row'>
        <Grid item xs={3}>
          <svg width='50' height='50' viewbox='0 0 50 50'>
            <circle cx='20' cy='15' r='12' fill={color} />
          </svg>
        </Grid>
        <Grid item xs={9}>
          <EssayWriter>{name}</EssayWriter>
        </Grid>
      </Grid>
    </TabWrap>
  );
};

const TabWrap = styled.div`
  border: 2px solid lightgray;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  padding: 5px;
  align-items: center;
`;

const EssayWriter = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
`;

export default ShareboardUserTab;
