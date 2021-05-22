import React, { useEffect, useState } from 'react';
import firebase from '../firebase-config';
import SessionCardList from './SessionCardList';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

const db = firebase.firestore();
const font = "'Russo One', sans-serif";

const RecentlyAddedSession = () => {
  const classes = useStyles();
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
      <Typography variant='h4' className={classes.banner} style={{ marginBottom: '25px' }}>
        Recently added debate
      </Typography>
      <SessionCardList bookList={bookList} url='/session/detail' />
    </>
  );
};


const useStyles = makeStyles({
  title: {
    color: '#FFFFFF',
    backgroundColor: '#EC9F05',
    padding: '10px 35px',
    fontSize: '1.6rem',
    fontWeight: 'bold',
  },
  banner: {
    color: '#000000',
    fontFamily: font,
    fontSize: '1.6rem',
  },
});

export default RecentlyAddedSession;
