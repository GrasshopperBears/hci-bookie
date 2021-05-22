import React from 'react';
import styled from 'styled-components';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const BookshelfCard = ({ info, size, userName, isDetail, isOwner, isBest }) => {
  const history = useHistory();

  const clickHandler = () => {
    if (!isDetail) history.push({ pathname: `/bookshelf/detail`, state: { info, userName, isOwner } });
  };

  var styleRules = {};

  if (size === 'small') {
    styleRules = { position: 'block', float: 'left', width: '150px', height: '250px' };
  }
  return (
    <Wrapper style={styleRules} isBest={isBest}>
      <CardActionArea onClick={clickHandler}>
        <CardMedia
          image={info.bookInfo.thumbnail}
          title='Book cover'
          style={{ width: '100%', height: '100%' }}
        />
      </CardActionArea>
    </Wrapper>
  );
};

const Wrapper = styled(Card)`
  width: 60%;
  height: 60vh;
  border: ${(props) => props.isBest && '3px solid #ec9f05'};

  > button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export default BookshelfCard;
