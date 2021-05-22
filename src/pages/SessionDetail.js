import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import firebase from '../firebase-config';
import Loading from '../components/Loading';
import SessionDetailHeader from '../components/SessionDetailHeader';
import SessionDetailBody from '../components/SessionDetailBody';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const SessionDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [bookInfo, setBookInfo] = useState(undefined);

  const fetchData = async () => {
    const result = await firebase.firestore().collection('sessions').doc(id).get();
    if (!result.exists) history.push('/');
    setBookInfo(result.data());
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return bookInfo ? (
    <Grid container spacing={1} direction='column' alignItems='center' justify='center'>
      <GridStyled item xs={12}>
        <SessionDetailHeader info={bookInfo} />
      </GridStyled>
      <GridStyled item xs={12}>
        <SessionDetailBody info={bookInfo} />
      </GridStyled>
    </Grid>
  ) : (
    <Loading />
  );
};

const GridStyled = styled(Grid)`
  display: flex;
  height: 100%;
  width: 100%;
`;

export default SessionDetail;
