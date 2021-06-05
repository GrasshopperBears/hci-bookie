import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import EssayCommentList from './ShareboardEssayCommentList';
import EnterComment from './EnterComment';
import firebase from '../firebase-config';
const db = firebase.firestore();

const ShareboardEssay = ({ info, idx, comments, authorized }) => {
  const [essayInfo, setEssayInfo] = useState(undefined);
  const [commentList, setCommentList] = useState(comments);
  const { id } = useParams();

  useEffect(() => {
    if (info) setEssayInfo(info);
  }, [info]);
  useEffect(() => {
    setCommentList(comments);
  }, [comments]);

  const addComment = async (idx, text) => {
    const { uid, displayName, photoURL } = firebase.auth().currentUser;
    const newCommentList = commentList
      ? {
          ...commentList,
          [Object.keys(commentList).length]: { uid, displayName, photoURL, text },
        }
      : {
          0: { uid, displayName, photoURL, text },
        };
    const { exists } = await db.collection('sessions').doc(`${id}/comments/${idx}`).get();
    if (!exists) await db.collection('sessions').doc(`${id}/comments/${idx}`).set(newCommentList);
    else await db.collection('sessions').doc(`${id}/comments/${idx}`).update(newCommentList);

    setCommentList(newCommentList);
    return true;
  };

  return essayInfo ? (
    <Wrapper>
      <Grid direction='column'>
        <Grid>
          <EssayWriter>{essayInfo.displayName}</EssayWriter>
          <EssayTitle>{essayInfo.title}</EssayTitle>
          <EssaySummaryHead>Summary</EssaySummaryHead>
          <EssaySummaryBody>{essayInfo.summary}</EssaySummaryBody>
          <EssayHead>Essay</EssayHead>
          <EssayBody>{essayInfo.essay}</EssayBody>
        </Grid>
        <Grid direction='column'>
          <EssayCommentHead>Comments</EssayCommentHead>
          {commentList && <EssayCommentList commentList={commentList} />}
          <EnterComment idx={idx} addComment={addComment} />
          {/* {authorized && <EnterComment />} */}
        </Grid>
      </Grid>
    </Wrapper>
  ) : (
    <Wrapper />
  );
};

const Wrapper = styled.div`
  padding: 30px;
  height: 550px;
  overflow-y: auto;
`;

const EssayWriter = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  margin-left: 20px;
  color: #888888;
`;

const EssayTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const EssaySummaryHead = styled.div`
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  margin-left: 20px;
  margin-top: 100px;
`;

const EssaySummaryBody = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  margin-left: 20px;
  margin-top: 30px;
`;

const EssayHead = styled.div`
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  margin-left: 20px;
  margin-top: 70px;
`;

const EssayBody = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  margin-left: 20px;
  margin-top: 30px;
`;

const EssayCommentHead = styled.div`
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  margin-left: 20px;
  margin-top: 70px;
`;

export default ShareboardEssay;
