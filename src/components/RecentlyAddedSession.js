import React, { useEffect, useState } from 'react';
import firebase from '../firebase-config';
import BookclubCard from './BookclubCard';
import { Typography, Grid } from '@material-ui/core';
import styled from 'styled-components';
import moment from 'moment';

const db = firebase.firestore();

const RecentlyAddedSession = () => {
  const [bookList, setBookList] = useState([]);

  const initList = async () => {
    const querySnapshot = await db
      .collection('sessions')
      .where('dateTime', '>=', moment().format('YYYY-MM-DDTHH:MM'))
      // .orderBy('dateTime') // 어떤 조건으로?
      .get();
    const books = [];
    querySnapshot.forEach((doc) => {
      books.push({ id: doc.id, ...doc.data() });
    });
    setBookList(books);
  };

  useEffect(() => {
    initList();
  }, []);

  return (
    <>
      <Typography variant='h4' style={{ marginBottom: '25px' }}>
        Recently added debate
      </Typography>
      <Grid container spacing={4}>
        {bookList.map((book) => (
          <Grid item lg={3} md={4} key={book.id} style={{ width: '100%' }}>
            <BookclubCard info={book} url='/' />
          </Grid>
        ))}
      </Grid>
      <SessionsWrapper></SessionsWrapper>
    </>
  );
};

const SessionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default RecentlyAddedSession;
