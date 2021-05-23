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
        <div>{essay_info.title}</div>
        <div>{essay_info.writer}</div>
        <div>{essay_info.summary}</div>
        <div>{essay_info.essay}</div>
      </div>
    );
  }
  
};

const TabWrap = styled.div`
  border: 2px solid lightgray;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  padding: 5px;
  align-items: center;
`;

const EssayWriter = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
`;

export default ShareboardEssay;