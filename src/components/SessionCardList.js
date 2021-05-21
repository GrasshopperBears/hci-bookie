import React from 'react';
import { Grid } from '@material-ui/core';
import BookclubCard from './BookclubCard';

const SessionCardList = ({ bookList }) => {
  return (
    <>
      <Grid container spacing={4}>
        {bookList.map((book) => (
          <Grid item lg={3} md={4} key={book.id} style={{ width: '100%' }}>
            <BookclubCard info={book} url='/' />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SessionCardList;
