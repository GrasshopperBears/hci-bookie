import React from 'react';
import List from '@material-ui/core/List';
import CommentTab from './CommentTab';

const EssayCommentList = ({ commentList }) => {
  return (
    <List>
      {Object.entries(commentList).map(([idx, commentInfo]) => (
        <CommentTab info={commentInfo} />
      ))}
    </List>
  );
};

export default EssayCommentList;
