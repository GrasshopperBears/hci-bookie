import React from 'react';
import BookshelfTabs from '../components/BookshelfTab';
import BookshelfCard from '../components/BookshelfCard';
import BookshelfTitle from '../components/BookshelfTitle';
import Grid from '@material-ui/core/Grid';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const BookshelfDetail = () => {
  const history = useHistory();
  const {
    state: { info, userName, isOwner },
  } = useLocation();

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
          <BookShelfWrapper>
            <BookshelfCard info={info} isDetail />
          </BookShelfWrapper>
        </Grid>
        <Grid item lg={8}>
          <BookshelfTabs info={info} isOwner={isOwner} />
        </Grid>
      </Grid>
    </Grid>
  );
};

const BookShelfWrapper = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 60px;
`;

export default BookshelfDetail;
