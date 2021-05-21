import React, { useRef, useState } from 'react';
import moment from 'moment';
import CeterDiv from '../components/CenterDiv';
import EnterBookInformation from '../components/EnterBookInformation';
import {
  Typography,
  FormControl,
  Button,
  TextField,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import styled from 'styled-components';

const CreateSession = () => {
  const [bookInfo, setBookInfo] = useState(undefined);
  const title = useRef(undefined);
  const memberNumber = useRef(undefined);
  const briefDescription = useRef(undefined);
  const dateTime = useRef(undefined);
  const zoomUrl = useRef(undefined);
  const content = useRef(undefined);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!bookInfo) return alert('Please enter book information');
    // title.current.value,
    // memberNumber.current.value,
    // briefDescription.current.value,
    // dateTime.current.value,
    // zoomUrl.current.value,
    // content.current.value,

    // bookInfo
  };

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
        <EnterBookInformation bookInfo={bookInfo} setBookInfo={setBookInfo} />
        <RowDiv>
          <FormControl fullWidth margin='normal'>
            <TextField
              required
              inputRef={memberNumber}
              type='number'
              variant='outlined'
              id='memberNumber'
              label='Maximum number of participants'
              placeholder='Enter maximum number of participants'
            />
          </FormControl>
          <FormControl fullWidth margin='normal' required style={{ margin: '0 30px' }}>
            <FormLabel>This Session is</FormLabel>
            <RadioGroupStyled name='isRepeating' defaultValue='false'>
              <FormControlLabel value='false' control={<Radio />} label='One-time' />
              <FormControlLabel value='true' control={<Radio />} label='Repeated' />
            </RadioGroupStyled>
          </FormControl>
          <FormControl fullWidth margin='normal'>
            <TextField
              required
              inputRef={dateTime}
              id='datetime-local'
              label='Session Time'
              type='datetime-local'
              defaultValue={moment().format('YYYY-MM-DDTHH:MM')}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
        </RowDiv>
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
            inputRef={zoomUrl}
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
            label='Introduction'
            placeholder='Please introduce about this session'
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

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RadioGroupStyled = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
`;

export default CreateSession;
