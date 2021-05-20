import React, { useRef, useState } from 'react';
import CeterDiv from '../components/CenterDiv';
import EnterBookInformation from '../components/EnterBookInformation';
import { Typography, FormControl, Button, TextField } from '@material-ui/core';

const CreateSession = () => {
  const [bookInfo, setBookInfo] = useState(undefined);
  const title = useRef(undefined);
  const memberNumber = useRef(undefined);
  const briefDescription = useRef(undefined);
  const dateTime = useRef(undefined);
  const zoomUrl = useRef(undefined);
  const content = useRef(undefined);

  const submitHandler = () => {};

  return (
    <>
      <Typography variant='h2'>Create session</Typography>
      <form onSubmit={submitHandler}>
        <FormControl fullWidth margin='normal'>
          <TextField
            required
            inputRef={title}
            variant='outlined'
            id='title'
            label='Title'
            placeholder='Enter title of sesssion'
          />
        </FormControl>
        <EnterBookInformation setBookInfo={setBookInfo} />
        <FormControl fullWidth margin='normal'>
          <TextField
            required
            multiline
            inputRef={briefDescription}
            rows={5}
            rowsMax={5}
            variant='outlined'
            id='briefDescription'
            label='Brief Description'
            placeholder='Briefly write about the session'
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <TextField
            required
            inputRef={title}
            variant='outlined'
            id='zoomUrl'
            label='Zoom URL'
            placeholder='Enter URL of ZOOM meeting room'
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <TextField
            required
            multiline
            inputRef={content}
            rows={20}
            rowsMax={20}
            variant='outlined'
            id='content'
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

export default CreateSession;
