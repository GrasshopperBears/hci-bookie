import React, { useEffect, useState } from 'react';
import firebase from '../firebase-config';
import SessionCardList from './SessionCardList';
import { Typography } from '@material-ui/core';
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
      <SessionCardList bookList={bookList} />
    </>
  );
};

export default RecentlyAddedSession;
