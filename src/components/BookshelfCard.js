import React from 'react';
import styled from 'styled-components';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const BookshelfCard = ({ imgUrl, size }) => {
  const history = useHistory();
  const url = "/bookshelf/detail/id";

  const clickHandler = () => {
    history.push(url);
  };

  var styleRules = { position: 'block', float: 'left', width: '330px', height: '550px', margin: '100px' };

  if (size === "small") {
    styleRules = { position: 'block', float: 'left', width: '150px', height: '250px', margin: '50px' };
  }
  return (
    <Wrapper style={styleRules}>
      <CardActionArea onClick={clickHandler}>
        <CardMedia image={imgUrl} title='Book cover' style={{ width: '100%', height: '100%' }} />
      </CardActionArea>
    </Wrapper>
  );
};

const Wrapper = styled(Card)`
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
