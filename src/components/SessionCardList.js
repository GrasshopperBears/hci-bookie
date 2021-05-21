import React from 'react';
import { Grid } from '@material-ui/core';
import BookclubCard from './BookclubCard';

const SessionCardList = ({ bookList, extra, url }) => {
  return (
    <>
      <Grid container spacing={4}>
        {bookList.map((book) => (
          <Grid item lg={3} md={4} key={book.id} style={{ width: '100%' }}>
            <BookclubCard info={book} url={`${url}/${book.id}`} />
          </Grid>
        ))}
        <Grid item lg={3} md={4} key={0} style={{ width: '100%' }}>
          {extra}
        </Grid>
      </Grid>
    </>
  );
};

export default SessionCardList;
