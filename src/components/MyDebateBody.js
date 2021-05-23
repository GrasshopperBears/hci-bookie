import React from 'react';
import moment from 'moment';
import { useHistory, useParams } from 'react-router-dom';
import { Grid, Typography, Divider, ButtonGroup, Button } from '@material-ui/core';
import styled from 'styled-components';
import SessionHeaderCommon from './SessionHeaderCommon';

const MyDebateBody = ({ info }) => {
  const history = useHistory();
  const { id } = useParams();
  const {
    bookInfo: { dateTime: publshDate, authors, thumbnail, publisher, title: bookTitle },
    title,
    genre,
    lastDebate,
    dateTime: nextDebate,
    host,
    participants,
    likes,
    zoomUrl,
  } = info;
  const goDetailPage = () => {
    history.push(`/session/detail/${id}`);
  };
  const startMeeting = () => {
    if (!zoomUrl.startsWith('http')) window.open(`http://${zoomUrl}`, '_blank');
    else window.open(zoomUrl, '_blank');
  };
  const goSharboard = () => {
    history.push(`/shareboard/${id}/ongoing`);
  };

  return (
    <>
      <SessionHeaderCommon title={title} likes={likes} />
      <Grid container spacing={10}>
        <GridStyled item xs={4}>
          <Grid container justify='center' alignItems='center'>
            <BookCover src={thumbnail} alt='book cover' />
          </Grid>
        </GridStyled>
        <GridStyled item xs={8}>
          <Grid container direction='column' justify='center'>
            <Typography style={{ fontSize: '30px', fontWeight: '600', marginBottom: '15px' }}>
              {bookTitle}
            </Typography>
            <BookinfoWrapper>
              <GreyText>Author . {authors.join(', ')}</GreyText>
              <Divider light orientation='vertical' variant='middle' />
              <GreyText>Publisher . {publisher}</GreyText>
              <Divider light orientation='vertical' variant='middle' />
              <GreyText>Publish date . {publshDate}</GreyText>
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
                <Divider light orientation='vertical' variant='middle' />
                {moment(lastDebate).format('MMMM Do, H:mm')}
              </BookinfoWrapper>
            )}
            {nextDebate && (
              <BookinfoWrapper style={{ marginBottom: '40px' }}>
                <GreyText>Next debate</GreyText>
                <Divider light orientation='vertical' variant='middle' />
                {moment(nextDebate).format('MMMM Do, H:mm')}
              </BookinfoWrapper>
            )}

            <Divider variant='middle' style={{ margin: '-10px 0 20px 0' }} />
            <BookinfoWrapper>
              <ParticipantsWrapper style={{ width: '30%' }}>
                <GreyText>Host</GreyText>
                <UserInfo info={host} />
              </ParticipantsWrapper>
              <ParticipantsWrapper style={{ width: '70%' }}>
                <GreyText>Participants</GreyText>
                <UserInfoWrapper>
                  {participants.map((el) => (
                    <UserInfo key={el.uid} info={el} />
                  ))}
                </UserInfoWrapper>
              </ParticipantsWrapper>
            </BookinfoWrapper>
            <Divider style={{ margin: '30px 0 50px 0' }} />
          </Grid>
        </GridStyled>
      </Grid>

      <Grid container spacing={10} alignItems='center' direction='row' justify='center'>
        <Button
          variant='contained'
          onClick={goSharboard}
          style={{ color: '#FFFFFF', margin: '0 10px 100px 10px', padding: '5px 50px 5px 50px' }}
        >
          Share board
        </Button>
        <Button
          variant='contained'
          onClick={startMeeting}
          style={{ color: '#FFFFFF', margin: '0 10px 100px 10px', padding: '5px 50px 5px 50px' }}
          disabled={moment(nextDebate).diff(moment(), 'minutes') > 30}
        >
          Start debate
        </Button>
        <Button
          variant='contained'
          onClick={goDetailPage}
          style={{ color: '#FFFFFF', margin: '0 10px 100px 10px', padding: '5px 50px 5px 50px' }}
        >
          More detail
        </Button>
      </Grid>
    </>
  );
};

const UserInfo = ({ info }) => {
  const { profileImg, uid, displayName } = info;
  const history = useHistory();

  const clickHandler = () => {
    if (uid) history.push(`/bookshelf/${uid}`);
  };

  return (
    <InfoWrapper onClick={clickHandler} hasUser={!!uid}>
      <ProfileImg
        src={profileImg || process.env.PUBLIC_URL + '/default-profile.png'}
        style={{ margin: '10px 20px 10px 0' }}
        alt='book cover'
      />
      <Typography variant='body1' style={{ color: 'black', fontWeight: 'bold', margin: '0 15px 0 0' }}>
        {displayName || 'Anonymous user'}
      </Typography>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: max-content;
  padding: 0 15px;
  border-radius: 3px;
  :hover {
    cursor: ${(props) => props.hasUser && 'pointer'};
    background-color: ${(props) => props.hasUser && 'rgba(30, 30, 30, 0.1)'};
  }
`;
const GreyText = styled(Typography)`
  color: grey;
`;

const ProfileImg = styled.img`
  width: 1.9rem;
  height: 1.9rem;
`;

const GridStyled = styled(Grid)`
  display: flex;
  height: 100%;
  width: 100%;
`;

const BookCover = styled.img`
  width: 250px;
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

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ButtonGruopStyled = styled(ButtonGroup)`
  button {
    font-size: 1.1rem;
    text-transform: none;
  }
`;

export default MyDebateBody;
