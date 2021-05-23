import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, CardActionArea, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import firebase from '../firebase-config';

const BookshelfTitle = ({ name, clickHandler, followers }) => {
  const classes = useStyles();
  const { id } = useParams();
  const { currentUser } = firebase.auth();
  const [following, setFollowing] = useState(false);
  const styleRules = { color: '#EC9F05', width: 'max-content', height: '0', top: '-20px' };

  useEffect(() => {
    if (followers.length) setFollowing(followers.findIndex((el) => el.uid === currentUser?.uid) >= 0);
  }, [followers, currentUser]);

  const followHandler = async () => {
    if (following) {
      await firebase
        .firestore()
        .collection('bookshelf')
        .doc(id)
        .update({
          followers: firebase.firestore.FieldValue.arrayRemove({
            uid: currentUser.uid,
            displayName: currentUser.displayName,
          }),
        });
    } else {
      await firebase
        .firestore()
        .collection('bookshelf')
        .doc(id)
        .update({
          followers: firebase.firestore.FieldValue.arrayUnion({
            uid: currentUser.uid,
            displayName: currentUser.displayName,
          }),
        });
    }
    setFollowing(!following);
  };

  return (
    <Wrapper>
      <CardActionArea
        style={styleRules}
        onClick={() => {
          if (clickHandler) clickHandler();
        }}
      >
        <Typography className={classes.title}>{name}'s Bookshelf</Typography>
      </CardActionArea>
      <FollowButton onClick={followHandler} size='medium' variant='contained'>
        {following ? 'Unfollow' : 'Follow'}
      </FollowButton>
    </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const FollowButton = styled(Button)`
  top: -7px;
  margin-left: 20px !important;
`;

export default BookshelfTitle;
