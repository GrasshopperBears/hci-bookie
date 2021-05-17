import React from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase-config';
import AuthIcons from '../components/AuthIcons';
import { Typography, Link } from '@material-ui/core';
import styled from 'styled-components';

const Signin = () => {
  const history = useHistory();

  const googleSigninHandler = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      history.push('/');
    } catch (e) {
      alert('Error occured during signin. Please try again.');
    }
  };
  const githubSigninHandler = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      history.push('/');
    } catch (e) {
      alert('Error occured during signin. Please try again.');
    }
  };

  return (
    <Wrapper>
      <Typography variant='h2'>Welcome back!</Typography>
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
    margin-bottom: 20px;
  }
  a {
    margin-left: 0.4rem;
  }
`;

export default Signin;
