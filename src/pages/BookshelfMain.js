import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card, CardActionArea, Typography } from '@material-ui/core';
import BookshelfCard from '../components/BookshelfCard';
import BookshelfTitle from '../components/BookshelfTitle';
import Grid from '@material-ui/core/Grid';
import { useHistory, useParams } from 'react-router';
import firebase from '../firebase-config';
import { makeStyles } from '@material-ui/core/styles';
const font = "'Russo One', sans-serif";
const BookshelfMain = () => {

  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const [userName, setUserName] = useState('');
  const [bookmarks, setBookmarks] = useState([]);
  const [bestBook, setBestBook] = useState(undefined);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  const goAddPage = () => {
    history.push('/bookshelf/add');
  };

  const fetchBookshelf = async () => {
    const hostQuerySnapshot = await firebase.firestore().collection('bookshelf').doc(id).get();
    // eslint-disable-next-line no-restricted-globals
    // if (!hostQuerySnapshot.exists) return location.reload();
    if (!hostQuerySnapshot.exists) {
      if (id !== firebase.auth().currentUser.uid) return;
      alert('Sign UP first!');
      await firebase.auth().signOut();
      window.location.href('/signup');
    } else {
      if (!hostQuerySnapshot.data().bookmarks.length && id === firebase.auth().currentUser.uid) {
        alert('Create your first bookmark!');
        return goAddPage();
      }
      setUserName(hostQuerySnapshot.data().displayName);
      setBookmarks(hostQuerySnapshot.data().bookmarks || []);
      setBestBook(hostQuerySnapshot.data().bestBook);
      setFollowers(hostQuerySnapshot.data().followers || []);
      setFollowing(hostQuerySnapshot.data().following || []);
    }
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
        onChange={fetchBookshelf}
      />
      {bookmarks.length ? (
        <Grid container direction='row' style={{ height: '75vh', marginTop: '5vh' }}>
          <BestBookGrid item lg={5} md={12}>
            <Grid container justify='center' direction='column'>
              <Typography className={classes.title} style={bestBook ? { marginBottom: '10px' } : { marginBottom: '10px' }}>
                {bestBook ? `${userName}'s best book` : `${userName} didn't set best book yet :(`}
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
      ) : (
        <NoBookmark>
          <Typography className={classes.noBook} >There is no bookmark yet :(</Typography>{' '}
        </NoBookmark>
      )}
    </>
  );
};
const useStyles = makeStyles({
  title: {
    color: '#EC9F05',
    padding: '10px 10px 10px 20px',
    margin: '-30px 0 -50px 0',
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
  noBook: {
    color: '#EC9F05',
    padding: '10px 10px 10px 20px',
    margin: '-30px 0 -50px 0',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
});
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

const NoBookmark = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export default BookshelfMain;
