import React from 'react';
import EssayTab from './EssayTab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const ShareboardEssayList = ({ essayList, onEssay }) => {
  const clickHandler = (index) => {
    onEssay(index);
  };

  return (
    <div>
      <List>
        {essayList.map((essay, index) => (
          <ListItem button onClick={clickHandler(index)}>
            <EssayTab essay={essay}></EssayTab>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ShareboardEssayList;
