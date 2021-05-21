import React from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@material-ui/core';
import styled from 'styled-components';
import genres from '../genres';

const BookclubCard = ({ info, url }) => {
  const { bookInfo, title, date, content, genre, participants } = info;
  const history = useHistory();

  const clickHandler = () => {
    history.push(url);
  };

  return (
    <CardStyled>
      <CardActionArea onClick={clickHandler} style={{ height: '100%', width: '100%' }}>
        <CardMedia image={bookInfo.thumbnail} title='Book cover' style={{ width: '100%', height: '55%' }} />
        <CardContentStyled>
          <Title variant='h5'>{title}</Title>
          <Typography variant='body1' style={{ marginBottom: '15px' }}>
            Date: {moment(date).format('MMMM Do, H:mm')}
          </Typography>
          <SessionDescription variant='body2' color='textSecondary'>
            {content}
          </SessionDescription>
          <Footer>
            {genre && (
              <GenreTag color={genres.find((el) => el.genre === genre).color || ''}>#{genre}</GenreTag>
            )}
            <Typography>
              Currently {participants.length} {participants.length <= 1 ? 'person' : 'people'} joined
            </Typography>
          </Footer>
        </CardContentStyled>
      </CardActionArea>
    </CardStyled>
  );
};

const CardStyled = styled(Card)`
  position: block;
  width: 100%;
  height: 600px;
`;

const CardContentStyled = styled(CardContent)`
  height: 45%;
  box-sizing: border-box;
  position: relative;
`;

const Title = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const SessionDescription = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  height: 6rem;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 0 0 18px;
`;

const GenreTag = styled.div`
  background-color: ${(props) => props.color};
  width: fit-content;
  padding: 5px 8px;
  border-radius: 3px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export default BookclubCard;
