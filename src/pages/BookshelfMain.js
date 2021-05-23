import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card, CardActionArea, Typography, Dialog } from '@material-ui/core';
import BookshelfCard from '../components/BookshelfCard';
import BookshelfTitle from '../components/BookshelfTitle';
import Grid from '@material-ui/core/Grid';
import { useHistory, useParams } from 'react-router';
import firebase from '../firebase-config';

const BookshelfMain = () => {
  const history = useHistory();
  const { id } = useParams();
  const [userName, setUserName] = useState('');
  const [bookmarks, setBookmarks] = useState([]);
  const [bestBook, setBestBook] = useState(undefined);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogInfo, setDialogInfo] = useState({ title: '', list: [] });

  const openDialog = () => {
    setShowDialog(true);
  };
  const closeDialog = () => {
    setShowDialog(false);
  };
  const goAddPage = () => {
    history.push('/bookshelf/add');
  };

  const fetchBookshelf = async () => {
    const hostQuerySnapshot = await firebase.firestore().collection('bookshelf').doc(id).get();
    // eslint-disable-next-line no-restricted-globals
    if (!hostQuerySnapshot.exists) return location.reload();
    setUserName(hostQuerySnapshot.data().displayName);
    setBookmarks(hostQuerySnapshot.data().bookmarks);
    setBestBook(hostQuerySnapshot.data().bestBook);
    setFollowers(hostQuerySnapshot.data().followers);
    setFollowing(hostQuerySnapshot.data().following);
  };

  useEffect(() => {
    fetchBookshelf();
  }, [id]);

  return (
    <>
      <BookshelfTitle
        name={userName}
        followers={followers}
        following={following}
        showFollow={id !== firebase.auth().currentUser.uid}
      />
      <Grid container direction='row' style={{ height: '75vh', marginTop: '5vh' }}>
        <BestBookGrid item lg={5} md={12}>
          <Grid container justify='center'>
            <Typography variant='h4' style={{ marginBottom: '30px' }}>
              User's best book
            </Typography>
            {bestBook && <BookshelfCard userName={userName} info={bestBook} isBest />}
          </Grid>
        </BestBookGrid>
        <BookcardGrid item lg={7} md={12}>
          <Grid container direction='row' justify='flex-start' spacing={4}>
            {id === firebase.auth().currentUser?.uid && (
              <Grid item>
                <Wrapper>
                  <CardActionArea onClick={goAddPage}>
                    <Typography variant='body1'>+ Add Book</Typography>
                  </CardActionArea>
                </Wrapper>
              </Grid>
            )}
            {bookmarks.map((bookmark) => (
              <Grid item>
                <BookshelfCard
                  info={bookmark}
                  userName={userName}
                  size='small'
                  isOwner={id === firebase.auth().currentUser?.uid}
                />
              </Grid>
            ))}
          </Grid>
        </BookcardGrid>
      </Grid>
    </>
  );
};

const Wrapper = styled(Card)`
  position: block;
  width: 150px;
  height: 250px;
  > button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const BestBookGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const BookcardGrid = styled(Grid)`
  margin-top: 100px !important;
  max-height: 550px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default BookshelfMain;
