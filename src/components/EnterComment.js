import React, { useRef } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { TextField, FormControl, Button } from '@material-ui/core';

const EnterComment = ({ idx, addComment }) => {
  const comment = useRef(undefined);

  const createComment = async () => {
    const { value: text } = comment.current;
    if (!text.length) return;
    const result = await addComment(idx, text);
    if (result) comment.current.value = '';
  };

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
          <Button
            onClick={createComment}
            type='submit'
            variant='contained'
            color='primary'
            size='middle'
            style={{ float: 'center' }}
          >
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

export default EnterComment;
