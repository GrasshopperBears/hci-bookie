import React from 'react';
import moment from 'moment';
import { Grid, Typography, Divider } from '@material-ui/core';
import styled from 'styled-components';
import SessionHeaderCommon from './SessionHeaderCommon';

const MyDebateBody = ({ info }) => {
  const {
    bookInfo: { dateTime: publshDate, authors, thumbnail, publisher, title: bookTitle },
    title,
    genre,
    lastDebate,
    dateTime: nextDebate,
    host,
    participants,
    likes,
  } = info;

  return (
    <>
      <SessionHeaderCommon title={title} likes={likes} />
      <Grid container spacing={10} style={{ height: '450px' }}>
        <GridStyled item xs={4} justify='center' alignItems='center'>
          <BookCover src={thumbnail} alt='book cover' />
        </GridStyled>
        <GridStyled item xs={8} direction='column' justify='center'>
          <Typography variant='h4' style={{ marginBottom: '15px' }}>
            {bookTitle}
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
              <UserInfo img={host.profileImg} name={host.displayName} />
            </ParticipantsWrapper>
            <ParticipantsWrapper style={{ width: '80%' }}>
              <Typography variant='body2'>Participants</Typography>
              {participants.map((el) => (
                <UserInfo img={el.profileImg} name={el.displayName} />
              ))}
            </ParticipantsWrapper>
          </BookinfoWrapper>
        </GridStyled>
      </Grid>
    </>
  );
};

const UserInfo = ({ img, name }) => {
  return (
    <InfoWrapper>
      <ProfileImg
        src={img || process.env.PUBLIC_URL + '/default-profile.png'}
        style={{ margin: '10px 20px 10px 0' }}
        alt='book cover'
      />
      <Typography variant='h8' style={{ color: 'black', fontWeight: 'bold', margin: '0 15px 0 0' }}>
        {name || 'Anonymous user'}
      </Typography>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
`;

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
