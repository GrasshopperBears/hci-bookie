import React from 'react';
import moment from 'moment';
import BookshelfTabs from '../components/BookshelfTab';
import BookshelfCard from '../components/BookshelfCard';
import BookshelfTitle from '../components/BookshelfTitle';
import Grid from '@material-ui/core/Grid';
import { useLocation, useHistory } from 'react-router-dom';

const BookshelfDetail = () => {
  const history = useHistory();
  const {
    state: { info, userName },
  } = useLocation();
  const { title, authors, publisher, datetime } = info.bookInfo;

  return (
    <Grid container direction='column'>
      <BookshelfTitle
        name={userName}
        clickHandler={() => {
          history.goBack();
        }}
      />
      <Grid container direction='row'>
        <Grid item lg={4}>
          <BookshelfCard info={info} isDetail />
        </Grid>
        <Grid item lg={8}>
          <BookshelfTabs
            title={title}
            author={authors?.join(', ') || ''}
            publisher={publisher}
            release={moment(datetime).format('YYYY-MM-DD')}
            comment={info.comment}
            review={info.review}
            // genre={genre}
            // review2={review2}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BookshelfDetail;
