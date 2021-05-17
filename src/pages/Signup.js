import React from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase-config';
import AuthIcons from '../components/AuthIcons';
import { Typography, Link } from '@material-ui/core';
import styled from 'styled-components';

const Signup = () => {
  const history = useHistory();

  const googleSignupHandler = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      history.push('/');
    } catch (e) {
      // const errorCode = e.code;
      // const errorMessage = e.message;
      alert('Error occured during signup. Please try again.');
    }
  };
  const githubSignupHandler = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      history.push('/');
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