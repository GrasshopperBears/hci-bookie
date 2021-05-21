import React from 'react';
import moment from 'moment';
import { Grid, Typography, Divider } from '@material-ui/core';
import styled from 'styled-components';

const MyDebateBody = ({ info }) => {
  const {
    bookInfo: { dateTime: publshDate, authors, thumbnail, publisher },
    title,
    genre,
    lastDebate,
    dateTime: nextDebate,
    host: { displayName: hostName },
    participants,
  } = info;

  return (
    <Grid container spacing={10} style={{ height: '450px' }}>
      <GridStyled item xs={4} justify='center' alignItems='center'>
        <BookCover src={thumbnail} alt='book cover' />
      </GridStyled>
      <GridStyled item xs={8} direction='column' justify='center'>
        <Typography variant='h4' style={{ marginBottom: '15px' }}>
          {title}
        </Typography>
        <BookinfoWrapper>
          <Typography>Author: {authors.join(', ')}</Typography>
          <Divider light='true' orientation='vertical' variant='middle' />
          <Typography>Publisher: {publisher}</Typography>
          <Divider light='true' orientation='vertical' variant='middle' />
          <Typography>Publish date: {publshDate}</Typography>
        </BookinfoWrapper>
        <Divider variant='middle' style={{ margin: '20px 0' }} />
        <BookinfoWrapper style={{ margin: '10px 0 30px' }}>
          <Typography style={{ marginRight: '30px' }}>#{genre}</Typography>
          {/* {tags.map((el) => (
            <Typography style={{ marginRight: '30px' }}>#{el}</Typography>
          ))} */}
        </BookinfoWrapper>
        {lastDebate && (
          <BookinfoWrapper style={{ marginBottom: '7px' }}>
            <Typography>Last debate</Typography>
            <Divider light='true' orientation='vertical' variant='middle' />
            {moment(lastDebate).format('MMMM Do, H:mm')}
          </BookinfoWrapper>
        )}
        {nextDebate && (
          <BookinfoWrapper style={{ marginBottom: '40px' }}>
            <Typography>Next debate</Typography>
            <Divider light='true' orientation='vertical' variant='middle' />
            {moment(nextDebate).format('MMMM Do, H:mm')}
          </BookinfoWrapper>
        )}
        <BookinfoWrapper>
          <ParticipantsWrapper style={{ width: '20%' }}>
            <Typography variant='body2'>Host</Typography>
            {/* TODO: Host Icons */}
          </ParticipantsWrapper>
          <ParticipantsWrapper style={{ width: '80%' }}>
            <Typography variant='body2'>Participants</Typography>
            {participants.map((el) => (
              <>{/* TODO: Participants Icons */}</>
            ))}
          </ParticipantsWrapper>
        </BookinfoWrapper>
      </GridStyled>
    </Grid>
  );
};

const GridStyled = styled(Grid)`
  display: flex;
  height: 100%;
  width: 100%;
`;

const BookCover = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const BookinfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: '30px';
  max-width: 100%;
`;

const ParticipantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MyDebateBody;
