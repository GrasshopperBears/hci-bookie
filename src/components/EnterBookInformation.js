import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  Typography,
  IconButton,
} from '@material-ui/core';
import styled from 'styled-components';
import { RiRefreshFill } from 'react-icons/ri';

const EnterBookInformation = ({ bookInfo, setBookInfo }) => {
  const [inputValue, setInputValue] = useState('');
  const [visible, setVisible] = useState(false);
  const [books, setBooks] = useState([]);

  const closeDialog = () => {
    setVisible(false);
    setBooks([]);
  };

  const searchHandler = async () => {
    if (!inputValue.length) return;
    const headers = { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}` };
    try {
      const result = await axios.get(`/v3/search/book?query=${inputValue}`, { headers });
      setBooks(result.data.documents);
      setVisible(true);
    } catch (e) {
      console.error(e);
    }
  };
  const refreshHandler = () => {
    setInputValue('');
    setBookInfo(undefined);
  };
  const selectBook = (book) => {
    setInputValue(book.title);
    setBookInfo(book);
    closeDialog();
  };

  return (
    <Wrapper>
      <TextField
        required
        fullWidth
        disabled={bookInfo}
        variant='outlined'
        id='bookInfo'
        label='Find Book'
        placeholder='Enter book information'
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
        InputProps={{
          endAdornment: (
            <Button
              onClick={searchHandler}
              disabled={bookInfo}
              variant='contained'
              size='large'
              color='primary'
            >
              Find
            </Button>
          ),
        }}
      />
      <IconButton onClick={refreshHandler} style={{ marginLeft: '15px' }}>
        <RiRefreshFill color={bookInfo ? '#ec9f05' : ''} />
      </IconButton>
      <Dialog open={visible} onClose={closeDialog} fullWidth maxWidth='sm'>
        <DialogTitle>Select book</DialogTitle>
        <List component='div' role='list'>
          {books.map((book) => (
            <ListItem
              button
              divider
              onClick={() => {
                selectBook(book);
              }}
              role='listitem'
              key={book.isbn}
            >
              <BookCover src={book.thumbnail} />
              <BookInfo>
                <Typography variant='h6'>{book.title}</Typography>
                <Typography variant='subtitle2'>{book.authors.join(', ')}</Typography>
              </BookInfo>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BookCover = styled.img`
  height: 110px;
  margin: 0 40px;
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export default EnterBookInformation;
