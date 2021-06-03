import React, { useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CeterDiv from '../components/CenterDiv';
import { TextField, Typography, FormControl, Button } from '@material-ui/core';
import firebase from '../firebase-config';
import styled from 'styled-components';

const font = "'Russo One', sans-serif";

const AddEssay = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const title = useRef(undefined);
  const summary = useRef(undefined);
  const essay = useRef(undefined);

  const submitHandler = async (e) => {
    e.preventDefault();
    await firebase
      .firestore()
      .collection('sessions')
      .doc(id)
      .update({
        essays: firebase.firestore.FieldValue.arrayUnion({
          uid: firebase.auth().currentUser.uid,
          displayName: firebase.auth().currentUser.displayName,
          profileImg: firebase.auth().currentUser.photoURL,
          title: title.current.value,
          summary: summary.current.value,
          essay: essay.current.value,
        }),
      });
    history.push(`/shareboard/${id}/ongoing`);
  };

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <Typography className={classes.banner}>New Essay</Typography>
        <FormControl fullWidth margin='normal'>
          <TextField
            required
            inputRef={title}
            variant='outlined'
            id='title'
            label='Title'
            placeholder='Enter title of essay'
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <TextField
            required
            multiline
            inputRef={summary}
            rows={5}
            rowsMax={5}
            variant='outlined'
            id='summary'
            label='Summary'
            placeholder='Briefly write what are you goinig to talk'
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <TextField
            required
            multiline
            inputRef={essay}
            rows={20}
            rowsMax={20}
            variant='outlined'
            id='essay'
            label='Essay'
            placeholder='Write down your essay. Please share how you think and feel.'
          />
        </FormControl>
        <CeterDiv>
          <Button type='submit' variant='contained' color='primary' size='large' style={{ float: 'center' }}>
            Submit
          </Button>
        </CeterDiv>
      </form>
    </Wrapper>
  );
};
const useStyles = makeStyles({
  banner: {
    color: '#000000',
    fontFamily: font,
    fontSize: '1.6rem',
    margin: '25px 0 0 0',
  },
});
const Wrapper = styled.div`
  margin-bottom: 50px;
`;

export default AddEssay;
