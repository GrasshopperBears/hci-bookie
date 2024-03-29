import React from 'react';
import firebase from '../firebase-config';
import AuthIcons from '../components/AuthIcons';
import { Typography, Link } from '@material-ui/core';
import styled from 'styled-components';

const Signin = () => {
  const googleSigninHandler = async () => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      window.location.href = '/';
    } catch (e) {
      alert('Error occured during signin. Please try again.');
    }
  };
  const githubSigninHandler = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      window.location.href = '/';
    } catch (e) {
      alert('Error occured during signin. Please try again.');
    }
  };

  return (
    <Wrapper>
      <Typography variant='h4'>Signin with</Typography>
      <AuthIcons googleHandler={googleSigninHandler} githubHandler={githubSigninHandler} />
      <Typography>
        Want to join bookclub?
        <Link href='/signup'>Sign up!</Link>
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

export default Signin;
