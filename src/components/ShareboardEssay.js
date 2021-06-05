import React, { useEffect, useState } from 'react';
import {Grid} from '@material-ui/core';
import styled from 'styled-components';
import EssayCommentList from './ShareboardEssayCommentList';
import EnterComment from './EnterComment';

const ShareboardEssay = ({ info }) => {
  const [essayInfo, setEssayInfo] = useState(undefined);
  useEffect(() => {
    if (info) setEssayInfo(info);
  }, [info]);

  const commentList = 
  [
    {'name': '이상현',
     'comment': 'It is good!'
    },
    {'name': '황영주',
     'comment': 'I like it'
    },
    {'name': '이진우',
     'comment': 'I wish...'
    }
  ];

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
          <EssayCommentList commentList = {commentList}/>
          <EnterComment></EnterComment>
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
