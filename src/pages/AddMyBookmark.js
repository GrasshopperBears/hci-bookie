import React, { useRef, useState } from 'react';
import CeterDiv from '../components/CenterDiv';
import { TextField, Typography, FormControl, Button } from '@material-ui/core';
import EnterBookInformation from '../components/EnterBookInformation';
import firebase from '../firebase-config';

const AddMyBookmark = () => {
  const [bookInfo, setBookInfo] = useState(undefined);
  const comment = useRef(undefined);
  const review = useRef(undefined);
  // bookInfo 는 객체 형식으로 title, author, publisher ... 등등의 정보를 포함함.
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!bookInfo) return alert('Please enter book information');
    await firebase
      .firestore()
      .collection('bookshelf')
      .add({
        bookInfo,
        comment: comment.current.value,
        review: review.current.value,
      });
  };

  return (
    <>
      <Typography variant='h2'>Add New Book</Typography>
        <form onSubmit={submitHandler}>
        <EnterBookInformation bookInfo={bookInfo} setBookInfo={setBookInfo} />
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
    </>
  );
};

export default AddMyBookmark;
