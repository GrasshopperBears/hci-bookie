import React, { useRef } from 'react';
import CeterDiv from '../components/CenterDiv';
import { TextField, Typography, FormControl, Button } from '@material-ui/core';

const AddMyBookmark = () => {
  const title = useRef(undefined);
  const comment = useRef(undefined);
  const review = useRef(undefined);
  const author = useRef(undefined);
  const publisher = useRef(undefined);

  const submitHandler = (e) => {
    e.preventDefault();
    // title.current, comment.current, review.current에 value 저장되어있음
  };

  return (
    <form onSubmit={submitHandler}>
      <Typography variant='h2'>Add New Book</Typography>
      <FormControl fullWidth margin='normal'>
        <TextField
          required
          inputRef={title}
          variant='outlined'
          id='title'
          label='title'
          placeholder='Search Book'
        />
      </FormControl>
      <FormControl margin='normal' style={{ width: '50%', float: 'left' }}>
        <TextField
          required
          inputRef={author}
          variant='outlined'
          id='author'
          label='author'
          placeholder='Author'
        />
      </FormControl>
      <FormControl margin='normal' style={{ width: '50%', float: 'left' }}>
        <TextField
          required
          inputRef={publisher}
          variant='outlined'
          id='publisher'
          label='publisher'
          placeholder='Publisher'
        />
      </FormControl>
      <FormControl fullWidth margin='normal'>
        <TextField
          required
          multiline
          inputRef={comment}
          rows={3}
          rowsMax={5}
          variant='outlined'
          id='Comment'
          label='Comment'
          placeholder='Write down your Comment'
        />
      </FormControl>
      <FormControl fullWidth margin='normal'>
        <TextField
          required
          multiline
          inputRef={review}
          rows={20}
          rowsMax={20}
          variant='outlined'
          id='Review'
          label='Review'
          placeholder='Write down your Review. Please share how you think and feel.'
        />
      </FormControl>
      <CeterDiv>
        <Button type='submit' variant='contained' color='primary' size='large' style={{ float: 'center' }}>
          Post
        </Button>
      </CeterDiv>
    </form>
  );
};

export default AddMyBookmark;
