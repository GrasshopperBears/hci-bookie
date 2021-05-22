import React from 'react';
import { Typography, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const BookshelfTitle = ({ name }) => {
  const classes = useStyles();
  const styleRules = { color: '#EC9F05', width: 'max-content', height: '0', margin: '-20px 0 0 0' };

  return (
    <CardActionArea style={styleRules}>
      <Typography className={classes.title}>{name}'s Bookshelf</Typography>
    </CardActionArea>
  );
};

const useStyles = makeStyles({
  title: {
    color: '#FFFFFF',
    backgroundColor: '#EC9F05',
    padding: '10px 35px',
    fontSize: '1.6rem',
    fontWeight: 'bold',
  },
});
export default BookshelfTitle;
