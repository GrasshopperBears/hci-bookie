import React from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@material-ui/core';
import styled from 'styled-components';

const BookclubCard = ({ info, url }) => {
  const { imgUrl, title, date, description, genre, peopleNumber } = info;
  const history = useHistory();

  const clickHandler = () => {
    history.push(url);
  };

  return (
    <CardStyled>
      <CardActionArea onClick={clickHandler} style={{ height: '100%', width: '100%' }}>
        <CardMedia image={imgUrl} title='Book cover' style={{ width: '100%', height: '55%' }} />
        <CardContentStyled>
          <Typography variant='h4'>{title}</Typography>
          <Typography variant='h6' style={{ marginBottom: '5px' }}>
            Date: {moment(date).format('MMMM Do, H:mm')}
          </Typography>
          <SessionDescription variant='body2' color='textSecondary'>
            {description}
          </SessionDescription>
          <Footer>
            <Typography variant='body2' style={{ fontWeight: 'bold', marginBottom: '5px' }}>
              #{genre}
            </Typography>
            <Typography>
              Currently {peopleNumber} {peopleNumber <= 1 ? 'person' : 'people'} joined
            </Typography>
          </Footer>
        </CardContentStyled>
      </CardActionArea>
    </CardStyled>
  );
};

const CardStyled = styled(Card)`
  position: block;
  width: 300px;
  height: 600px;
`;

const CardContentStyled = styled(CardMedia)`
  padding: 10px 15px;
  height: 45%;
  box-sizing: border-box;
  position: relative;
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

export default BookclubCard;
