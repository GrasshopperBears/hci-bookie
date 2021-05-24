/* eslint-disable no-restricted-globals */
import React from 'react';
import firebase from '../firebase-config';
import AuthIcons from '../components/AuthIcons';
import { Typography, Link } from '@material-ui/core';
import styled from 'styled-components';

const Signup = () => {
  const googleSignupHandler = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      await firebase.auth().signInWithPopup(provider);
      const { uid, displayName } = firebase.auth().currentUser;
      const { exists } = await firebase.firestore().collection('bookshelf').doc(uid).get();
      if (!exists) {
        await firebase
          .firestore()
          .collection('bookshelf')
          .doc(uid)
          .set({ displayName, bookmarks: [], followers: [] });
      } else {
        alert('You already signed up');
      }
      window.location.href = '/';
    } catch (e) {
      alert('Error occured during signup. Please try again.');
    }
  };
  const githubSignupHandler = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      window.location.href = '/';
    } catch (e) {
      alert('Error occured during signup. Please try again.');
    }
  };

  return (
    <Wrapper>
      <Typography variant='h4'>Join Bookie with</Typography>
      <AuthIcons googleHandler={googleSignupHandler} githubHandler={githubSignupHandler} />
      <Typography>
        Already joined?
        <Link href='/signin'>Just sign in!</Link>
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .MuiTypography-root {
    margin: 20px 0;
  }
  a {
    margin-left: 0.4rem;
  }
`;

export default Signup;
