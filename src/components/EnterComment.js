import React, { useRef } from 'react';
import styled from 'styled-components';
import { Grid, Avatar } from '@material-ui/core';
import { TextField, Typography, FormControl, Button } from '@material-ui/core';

const EnterComment = () => {

  const comment = useRef(undefined);

  return (
    <TabWrap style={{ backgroundColor: '#ffffff' }}>
      <Grid container direction='row' alignItems='center' spacing={1}>
        <Grid item xs='10'>
          <FormControl fullWidth margin='normal'>
            <TextField
              required
              inputRef={comment}
              variant='outlined'
              id='comment'
              label='Comment'
              placeholder='Enter your comment'
            />
          </FormControl>
        </Grid>
        <Grid item alignItems='center' spacing={1}>
          <Button type='submit' variant='contained' color='primary' size='middle' style={{ float: 'center' }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </TabWrap>
    
  );
};

const TabWrap = styled.div`
  align-items: center;
`;

const CommentInput = styled.input`
`;

export default EnterComment;
