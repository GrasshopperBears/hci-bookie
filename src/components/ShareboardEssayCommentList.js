import React from 'react';
import EssayTab from './EssayTab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { InfoOutlined } from '@material-ui/icons';
import CommentTab from './CommentTab';

const EssayCommentList = ({ commentList }) => {
  return (
    <List>
      {commentList.map((commentInfo) => (
        <CommentTab info={commentInfo} />
      ))}
    </List>
  );
};

export default EssayCommentList;
