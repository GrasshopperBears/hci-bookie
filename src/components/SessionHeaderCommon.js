import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from '../firebase-config';
import styled from 'styled-components';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const db = firebase.firestore();

const SessionHeaderComon = ({ title, likes }) => {
  const { id } = useParams();
  const [likeNumber, setLikeNumber] = useState(likes?.length || 0);

  const likeHandler = async () => {
    const { currentUser } = firebase.auth();
    if (!currentUser) return alert('You have to log in');
    if (likes.includes(currentUser.uid)) {
      await db
        .collection('sessions')
        .doc(id)
        .update({ likes: firebase.firestore.FieldValue.arrayRemove(currentUser.uid) });
      setLikeNumber(likeNumber - 1);
    } else {
      await db
        .collection('sessions')
        .doc(id)
        .update({ likes: firebase.firestore.FieldValue.arrayUnion(currentUser.uid) });
      setLikeNumber(likeNumber + 1);
    }
  };

  return (
    <Wrapper>
      <LikeButton onClick={likeHandler} startIcon={<FontAwesomeIcon icon={faHeart} color='red' size='1x' />}>
        {likeNumber} likes
      </LikeButton>
      <BookinfoWrapper>
        <Typography variant='h4' style={{ fontWeight: 600, marginBottom: '15px' }}>
          {title}
        </Typography>
        <HorizonLine />
      </BookinfoWrapper>
    </Wrapper>
  );
};

const HorizonLine = () => {
  return (
    <div
      style={{
        width: '30%',
        textAlign: 'center',
        borderBottom: '5px solid #EC9F05',
        lineHeight: '0.1em',
        margin: '10px 0 15px',
      }}
    />
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin-top: 30px;
  > div {
    width: 100%;
  }
`;

const LikeButton = styled(Button)`
  width: max-content;
  padding: 7px 20px !important;
`;

const BookinfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: '20px';
  max-width: 100%;
`;

export default SessionHeaderComon;
