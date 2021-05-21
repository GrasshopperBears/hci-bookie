import React, { useState, useEffect } from 'react';
import firebase from '../firebase-config';
import { Typography } from '@material-ui/core';
import SessionCardList from './SessionCardList';
import MainPageCreateSessionBox from './MainPageCreateSessionBox';
import moment from 'moment';

const db = firebase.firestore();

const MainPageMySessions = () => {
  const [bookList, setBookList] = useState([]);

  const initList = async () => {
    const books = [];

    const hostQuerySnapshot = await db
      .collection('sessions')
      .where('dateTime', '>=', moment().format('YYYY-MM-DDTHH:MM'))
      .where('host.uid', '==', firebase.auth().currentUser.uid)
      .orderBy('dateTime')
      .get();
    hostQuerySnapshot.forEach((doc) => {
      books.push({ id: doc.id, ...doc.data() });
    });
    const participantQuerySnapshot = await db
      .collection('sessions')
      .where('dateTime', '>=', moment().format('YYYY-MM-DDTHH:MM'))
      .where('participants', 'array-contains', firebase.auth().currentUser.uid)
      .orderBy('dateTime')
      .get();
    participantQuerySnapshot.forEach((doc) => {
      books.push({ id: doc.id, ...doc.data() });
    });
    books.sort((a, b) => (a.dateTime > b.dateTime ? 1 : -1));
    setBookList(books);
  };

  useEffect(() => {
    initList();
  }, []);

  return (
    <>
      <Typography variant='h4' style={{ marginBottom: '25px' }}>
        My debates
      </Typography>
      <SessionCardList bookList={bookList} extra={<MainPageCreateSessionBox />} />
    </>
  );
};

export default MainPageMySessions;
