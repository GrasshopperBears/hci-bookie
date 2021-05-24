import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import CeterDiv from '../components/CenterDiv';
import { TextField, Typography, FormControl, Button } from '@material-ui/core';
import firebase from '../firebase-config';

const AddEssay = () => {
  const { id } = useParams();
  const title = useRef(undefined);
  const summary = useRef(undefined);
  const essay = useRef(undefined);

  const submitHandler = async (e) => {
    e.preventDefault();
    // title.current, summary.current, content.current에 value 저장되어있음
    // await firebase.firestore().collection('sessions')
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <Typography variant='h2'>New Essay</Typography>
        <FormControl fullWidth margin='normal'>
          <TextField
            required
            inputRef={title}
            variant='outlined'
            id='title'
            label='Title'
            placeholder='Enter title of essay'
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <TextField
            required
            multiline
            inputRef={summary}
            rows={5}
            rowsMax={5}
            variant='outlined'
            id='summary'
            label='Summary'
            placeholder='Briefly write what are you goinig to talk'
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <TextField
            required
            multiline
            inputRef={essay}
            rows={20}
            rowsMax={20}
            variant='outlined'
            id='essay'
            label='Essay'
            placeholder='Write down your essay. Please share how you think and feel.'
          />
        </FormControl>
        <CeterDiv>
          <Button type='submit' variant='contained' color='primary' size='large' style={{ float: 'center' }}>
            Submit
          </Button>
        </CeterDiv>
      </form>
    </>
  );
};

export default AddEssay;
