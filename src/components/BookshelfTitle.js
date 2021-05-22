import React from 'react';
import styled from 'styled-components';
import { Grid, Typography, Card, CardActionArea, CardMedia } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const BookshelfTitle = () => {
    const classes = useStyles();
    const history = useHistory();
    const url = "/bookshelf/id";

    const clickHandler = () => {
        history.push(url);
    };

    var styleRules = { color: '#EC9F05', width: '300px', height: '60px', margin: '-20px 0 0 0' };

    return (
        <CardActionArea style={styleRules} onClick={clickHandler}>
            <Typography className={classes.title} >
                AnyName's Bookshelf
                </Typography>
        </CardActionArea>
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
const useStyles = makeStyles({
    title: {
        color: '#FFFFFF',
        backgroundColor: '#EC9F05',
        padding: '20px 25px 20px 25px',
        fontSize: 25,
        fontWeight: 'bold'
    },
});
export default BookshelfTitle;
