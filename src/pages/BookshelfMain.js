import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card, CardActionArea, Typography } from '@material-ui/core';
import BookshelfCard from '../components/BookshelfCard';
import BookshelfTitle from '../components/BookshelfTitle';
import Grid from '@material-ui/core/Grid';
import { useHistory, useParams } from 'react-router';
import firebase from '../firebase-config';

const BookshelfMain = () => {
  const imgUrl1 =
    'https://images-na.ssl-images-amazon.com/images/I/41Ojcfxmn1L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg';

  const history = useHistory();
  const { id } = useParams();
  const [userName, setUserName] = useState('');
  const [bookmarks, setBookmarks] = useState([]);
  const clickHandler = () => {
    history.push('/bookshelf/add');
  };

  const fetchBookshelf = async () => {
    const hostQuerySnapshot = await firebase.firestore().collection('bookshelf').doc(id).get();
    // eslint-disable-next-line no-restricted-globals
    if (!hostQuerySnapshot.exists) return location.reload();
    setUserName(hostQuerySnapshot.data().displayName);
    setBookmarks(hostQuerySnapshot.data().bookmarks);
  };

  useEffect(() => {
    fetchBookshelf();
  }, [id]);

  return (
    <>
      <BookshelfTitle name={userName} />
      <Grid container direction='row'>
        <Grid item lg={5} md={12}>
          <BookshelfCard imgUrl={imgUrl1} />
        </Grid>
        <BookcardGrid item lg={7} md={12}>
          <Grid container direction='row' justify='flex-start' spacing={4}>
            <Grid item>
              <Wrapper>
                <CardActionArea onClick={clickHandler}>
                  <Typography variant='h6'>Add Book</Typography>
                </CardActionArea>
              </Wrapper>
            </Grid>
            {bookmarks.map((bookmark) => (
              <Grid item>
                <BookshelfCard imgUrl={bookmark.bookInfo.thumbnail} size='small' />
              </Grid>
            ))}
          </Grid>
        </BookcardGrid>
      </Grid>
    </>
  );
};

const Wrapper = styled(Card)`
  position: block;
  width: 150px;
  height: 250px;
  > button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const BookcardGrid = styled(Grid)`
  margin-top: 100px !important;
  max-height: 550px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default BookshelfMain;
