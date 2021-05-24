import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { GrAddCircle } from 'react-icons/gr';
import styled from 'styled-components';

const AddEssayButton = () => {
  return (
    <Wrapper>
      <Grid container direction='row' alignItems='center'>
        <Grid xs={1}>
          <GrAddCircle size='25' />
        </Grid>
        <Grid xs={11}>
          <Typography variant='h6'>Add new Essay</Typography>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid lightgray;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  padding: 0 20px;
`;

export default AddEssayButton;
