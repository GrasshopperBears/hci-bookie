import React, { useRef, useState } from 'react';
import moment from 'moment';
import firebase from '../firebase-config';
import CeterDiv from '../components/CenterDiv';
import EnterBookInformation from '../components/EnterBookInformation';
import genres from '../genres';
import {
  Typography,
  FormControl,
  Button,
  TextField,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Menu,
  MenuItem,
  Divider,
} from '@material-ui/core';
import { BiChevronDown } from 'react-icons/bi';
import styled from 'styled-components';

const CreateSession = () => {
  const [bookInfo, setBookInfo] = useState(undefined);
  const [isRepeating, setIsRepeating] = useState(false);
  const [showGenres, setShowGenres] = useState(false);
  const [genre, setGenre] = useState('');
  const title = useRef(undefined);
  const memberNumber = useRef(undefined);
  const briefDescription = useRef(undefined);
  const dateTime = useRef(undefined);
  const zoomUrl = useRef(undefined);
  const content = useRef(undefined);
  const selectGenreBtn = useRef(undefined);

  const radioClickhandler = (e) => {
    setIsRepeating(e.target.value === 'true');
  };
  const openGenreDropdown = () => {
    setShowGenres(true);
  };
  const hideGenreDropdown = () => {
    setShowGenres(false);
  };
  const handleMenu = (select) => {
    setGenre(select);
    setShowGenres(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!bookInfo) return alert('Please enter book information');
    await firebase
      .firestore()
      .collection('sessions')
      .add({
        title: title.current.value,
        memberNumber: memberNumber.current.value,
        briefDescription: briefDescription.current.value,
        dateTime: dateTime.current.value,
        zoomUrl: zoomUrl.current.value,
        content: content.current.value,
        host: firebase.auth().currentUser?.uid || '',
        participants: [],
        bookInfo,
        isRepeating,
        genre,
      });
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
            <RadioGroupStyled onChange={radioClickhandler} name='isRepeating' defaultValue='false'>
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
        <GenreButton
          id='genre-btn'
          ref={selectGenreBtn}
          onClick={openGenreDropdown}
          variant='outlined'
          fullWidth
          startIcon={
            <>
              <BiChevronDown />
              Genre
              <Divider orientation='vertical' variant='fullWidth' flexItem style={{ margin: '0 10px' }} />
            </>
          }
        >
          {genre.length ? genre : 'Select genre'}
        </GenreButton>
        <Menu
          id='genre-dropdown'
          anchorEl={selectGenreBtn.current}
          keepMounted
          open={showGenres}
          onClose={hideGenreDropdown}
          style={{ width: '100%' }}
          PaperProps={{
            style: {
              maxHeight: '300px',
              width: selectGenreBtn.current?.offsetWidth || '',
            },
          }}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          {genres.map((el) => (
            <MenuItem
              fullWidth
              onClick={() => {
                handleMenu(el.genre);
              }}
            >
              {el.genre}
            </MenuItem>
          ))}
        </Menu>
        <CeterDiv>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            size='large'
            style={{ float: 'center', marginTop: '20px' }}
          >
            Create session
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
  flex-direction: row !important;
`;

const GenreButton = styled(Button)`
  justify-content: flex-start;
`;

export default CreateSession;
