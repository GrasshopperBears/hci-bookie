import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Typography,
  CardActionArea,
  Button,
  Dialog,
  DialogTitle,
  ListItemAvatar,
  Avatar,
  List,
  ListItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import firebase from '../firebase-config';

const BookshelfTitle = ({ name, clickHandler, followers, following, showFollow, onChange, hideFollow }) => {
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  const { currentUser } = firebase.auth();
  const [followingNow, setFollowingNow] = useState(false);
  const styleRules = { color: '#EC9F05', width: 'max-content', height: '0', top: '-20px' };
  const [showDialog, setShowDialog] = useState(false);
  const [dialogInfo, setDialogInfo] = useState({ title: '', list: [] });

  const openFollowers = () => {
    setDialogInfo({ title: 'Followers', list: followers });
    setShowDialog(true);
  };
  const openFollowing = () => {
    setDialogInfo({ title: 'Following', list: following });
    setShowDialog(true);
  };
  const closeDialog = () => {
    setShowDialog(false);
  };
  useEffect(() => {
    if (!hideFollow) setFollowingNow(followers.findIndex((el) => el.uid === currentUser?.uid) >= 0);
  }, [followers, currentUser]);

  const followHandler = async () => {
    if (followingNow) {
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
      await firebase
        .firestore()
        .collection('bookshelf')
        .doc(currentUser.uid)
        .update({
          following: firebase.firestore.FieldValue.arrayRemove({
            uid: id,
            displayName: name,
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
      await firebase
        .firestore()
        .collection('bookshelf')
        .doc(currentUser.uid)
        .update({
          following: firebase.firestore.FieldValue.arrayUnion({
            uid: id,
            displayName: name,
          }),
        });
    }
    // setFollowingNow(!followingNow);
    onChange();
  };

  return (
    <Wrapper>
      <CardActionArea
        style={styleRules}
        onClick={() => {
          if (clickHandler) clickHandler();
        }}
      >
        <Typography className={classes.title}>{name ? name : 'Anonymous'}'s Bookshelf</Typography>
      </CardActionArea>
      {!hideFollow && name && (
        <>
          {showFollow && (
            <FollowButton onClick={followHandler} size='medium' variant='contained'>
              {followingNow ? 'Unfollow' : 'Follow'}
            </FollowButton>
          )}
          <FollowButton size='small' onClick={openFollowers}>
            {followers.length} Followers
          </FollowButton>
          <FollowButton size='small' onClick={openFollowing}>
            {following.length} Following
          </FollowButton>
        </>
      )}
      <Dialog open={showDialog} onClose={closeDialog} maxWidth='xs' fullWidth>
        <DialogTitle>{dialogInfo.title}</DialogTitle>
        <List>
          {dialogInfo.list.map((user) => (
            <ListItem
              button
              divider
              onClick={() => {
                closeDialog();
                history.push(`/bookshelf/${user.uid}`);
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt='profile image'
                  src={user.profileImg || process.env.PUBLIC_URL + '/default-profile.png'}
                />
              </ListItemAvatar>
              {user.displayName}
            </ListItem>
          ))}
        </List>
      </Dialog>
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
