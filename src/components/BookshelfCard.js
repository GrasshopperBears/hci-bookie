import React from 'react';
import styled from 'styled-components';
import { Card, CardMedia } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const BookshelfCard = ({ imgUrl, size }) => {
    const history = useHistory();
    const url = "detail/:id";

    const clickHandler = () => {
      history.push(url);
    };

    var styleRules = {position: 'block', float: 'left', width: '300px', height: '500px', margin: '100px'};

    if (size === "small") {
        styleRules = {position: 'block', float: 'left', width: '150px', height: '250px', margin: '50px'};
    }
    return (
        <Card onClick={clickHandler} style={styleRules}>
            <CardMedia image={imgUrl} title='Book cover' style={{ width: '100%', height: '100%' }} />
        </Card>
    );
};

export default BookshelfCard;
