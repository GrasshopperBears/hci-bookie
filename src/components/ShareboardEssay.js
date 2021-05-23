import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { getThemeProps } from '@material-ui/styles';

const ShareboardEssay = ({ index, essay_info }) => {
  if (index < 0) {
    return null;
  }
  else {
    return (
        <div>
          <EssayWriter>{essay_info.writer}</EssayWriter>
          <EssayTitle>{essay_info.title}</EssayTitle>
          <EssaySummary>{essay_info.summary}</EssaySummary>
          <EssayBody >{essay_info.essay}</EssayBody >
        </div>
      );
      }
  
};

const EssayWriter = styled.div`
  font-size: 10px;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
`;

const EssayTitle = styled.div`
  font-size: 25px;
  font-weight: 800;
  line-height: 30px;
  text-align: center;
`;

const EssaySummary = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
`;

const EssayBody = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
`;

export default ShareboardEssay;