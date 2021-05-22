import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../firebase-config';
import { useHistory } from 'react-router-dom';
import { GoMegaphone } from 'react-icons/go';
import { ImBooks } from 'react-icons/im';
import { RiLogoutCircleRFill } from 'react-icons/ri';
import { createMuiTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

const font = "'Russo One', sans-serif";

const Banner = () => {
  const classes = useStyles();
  const history = useHistory();
  const main = '/';
  const createsession = '/session/create';
  const bookshelf = '/bookshelf/:id';
  const { currentUser } = firebase.auth();

  const bookie = () => {
    history.push(main);
  };

  const clickFirstButton = () => {
    if (currentUser) history.push(createsession);
    else history.push('/signup');
  };

  const clickSecondButton = () => {
    if (currentUser) history.push(bookshelf);
    else history.push('/signin');
  };

  // top padding +40px 위치에 button 위치하게 함. Ex) paddingTop: 50px => button top: 90px; paddingTop: 100px => button top: 140px,
  return (
    <>
      <Wrapper>
        <BookieTitle className={classes.button} onClick={bookie}>
          <Typography className={classes.banner} variant='h2'>
            Bookie
          </Typography>
        </BookieTitle>
        <UserMenu>
          <Button
            className={classes.button}
            onClick={clickFirstButton}
            startIcon={currentUser && <GoMegaphone className={classes.icon} />}
          >
            {currentUser ? 'Open Debate' : 'Sign up'}
          </Button>
          <Button
            className={classes.button}
            onClick={clickSecondButton}
            startIcon={currentUser && <ImBooks className={classes.icon} />}
          >
            {currentUser ? 'My Bookshelf' : 'Sign in'}
          </Button>
        </UserMenu>
      </Wrapper>
      <HorizonLine w='100%' m='10px 0 20px 0' b='5px solid #EC9F05' />
    </>
  );
};

const useStyles = makeStyles({
  text: {
    color: '#EC9F05',
  },
  divider: {
    background: '#EC9F05',
  },
  button: {
    textTransform: 'none',
  },
  icon: {
    color: '#EC9f05',
  },
  banner: {
    color: '#EC9F05',
    fontFamily: font,
  },
});
const HorizonLine = ({ w, m, b }) => {
  return (
    <div
      style={{
        width: w,
        textAlign: 'center',
        align: 'center',
        borderBottom: b,
        lineHeight: '0.1em',
        margin: m,
      }}
    ></div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 30px;
  width: 100%;
`;
const BookieTitle = styled(Button)`
  padding: 0 !important;
  &:hover {
    background-color: inherit !important;
  }
`;
const UserMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  button {
    width: max-content;
    padding: 7px 20px;
  }
`;

export default Banner;
