import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import UserInformation from '../components/UserInformation';
import firebase from '../firebase-config';
import { Grid, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';

const db = firebase.firestore();

const SessionDetailBody = ({ info }) => {
  const { id } = useParams();
  const {
    briefDescription,
    title,
    bookInfo: { authors, publisher, thumbnail },
    genre,
    content,
    participants,
    host,
    memberNumber,
  } = info;

  const [hideApply] = useState(
    !firebase.auth().currentUser ||
    host.uid === firebase.auth().currentUser.uid ||
    participants.findIndex((el) => el.uid === firebase.auth().currentUser.uid) !== -1,
  );
  const history = useHistory();

  const button_shareboard = () => {
    history.push(`/shareboard/${id}/ongoing`);
  };
  const button_apply = async () => {
    alert('You succesfully apply for a new debate!');
    await db
      .collection('sessions')
      .doc(id)
      .update({
        participants: firebase.firestore.FieldValue.arrayUnion({
          uid: firebase.auth().currentUser.uid,
          displayName: firebase.auth().currentUser.displayName,
        }),
      });
    history.push(`/my-debate/${id}`);
  };

  return (
    <Grid container spacing={1}>
      <GridStyled container alignItems='center' direction='column' justify='flex-start'>
        <Typography
          variant='body2'
          style={{
            backgroundColor: '#EEEEEE',
            padding: '20px 100px 20px 100px',
            maxWidth: '100%',
            marginBottom: '40px',
          }}
        >
          {briefDescription.split('/n').map((line) => (
            <span>{line}</span>
          ))}
        </Typography>
        <Typography variant='h4' style={{ fontSize: '1.8rem', fontWeight: 500, marginBottom: '10px' }}>
          {title}
        </Typography>
        <Typography variant='body1' style={{ marginBottom: '5px' }}>
          Author : {authors.join(', ')}
        </Typography>
        <Typography variant='body1' style={{ marginBottom: '5px' }}>
          Publisher : {publisher}
        </Typography>
        <BookinfoWrapper>
          <BookCover src={thumbnail} alt='book cover' />
        </BookinfoWrapper>
        <BookinfoWrapper style={{ margin: '10px 0 30px' }}>
          <Typography style={{ marginRight: '30px' }}>#{genre}</Typography>
        </BookinfoWrapper>
        <HorizonLine w='100%' m='10px 0 -5px 0' b='5px solid #EEEEEE' />
        <HorizonLine w='10%' m='0 0 30px 0 ' b='5px solid #EC9F05' />
        <Typography variant='body1' style={{ maxWidth: '100%', marginBottom: '20px' }}>
          {content.split('/n').map((line) => (
            <span>{line}</span>
          ))}
        </Typography>
        <HorizonLine w='100%' m='0 0 10px 0' b='5px solid #EEEEEE' />
        <Typography
          variant='h6'
          style={{ color: 'grey', width: '100%', justifyContent: 'flex-end', marginBottom: '20px' }}
        >
          Current participant
        </Typography>
        <UserInformation isHost info={host} />
        {participants.map((p) => (
          <UserInformation key={p.uid} info={p} />
        ))}
        <HorizonLine w='100%' m='10px 0 20px 0 ' b='5px solid #EC9F05' />
      </GridStyled>
      <GridStyled container alignItems='center' direction='row' justify='center'>
        <Button
          variant='contained'
          onClick={button_shareboard}
          style={{ margin: '0 20px 0 0', padding: '5px 20px 5px 20px' }}
        >
          Share board
        </Button>
        {!hideApply && memberNumber > participants.length + 1 && (
          <Button
            variant='contained'
            onClick={button_apply}
            color='primary'
            style={{ margin: '0 20px 0 0', padding: '5px 40px 5px 40px' }}
          >
            Apply
          </Button>
        )}
      </GridStyled>
    </Grid>
  );
};

const GridStyled = styled(Grid)`
  display: flex;
  width: 100%;
`;
const BookinfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: '20px';
  max-width: 100%;
`;
const BookCover = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: 20px 0;
`;

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
    />
  );
};

export default SessionDetailBody;
