import React, { useEffect, useState } from 'react';
import firebase from '../firebase-config';
import BookclubCard from './BookclubCard';
import { Typography, Grid } from '@material-ui/core';
import styled from 'styled-components';

const db = firebase.firestore();

const RecentlyAddedSession = () => {
  const [bookList, setBookList] = useState([]);

  const initList = async () => {
    const querySnapshot = await db.collection('sessions').get();
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setBookList([...bookList, { id: doc.id, ...data }]);
    });
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
          <Grid item lg={3} md={4}>
            <BookclubCard key={book.id} info={book} url='/' />
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
