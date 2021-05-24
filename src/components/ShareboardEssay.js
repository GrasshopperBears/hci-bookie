import React from 'react';
import styled from 'styled-components';

const ShareboardEssay = ({ index, essay_info, userList }) => {
  if (index < 0) {
    return <Wrapper />;
  } else {
    return (
      <Wrapper>
        <EssayWriter>{userList[essay_info.writer]}</EssayWriter>
        <EssayTitle>{essay_info.title}</EssayTitle>
        <EssaySummaryHead>Summary</EssaySummaryHead>
        <EssaySummaryBody>{essay_info.summary}</EssaySummaryBody>
        <EssayHead>Essay</EssayHead>
        <EssayBody>{essay_info.essay}</EssayBody>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  padding: 30px;
  height: 1000px;
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
  font-size: 20px;
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
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  margin-left: 20px;
  margin-top: 30px;
`;

export default ShareboardEssay;
