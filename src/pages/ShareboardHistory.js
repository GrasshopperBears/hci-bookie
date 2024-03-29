import React from 'react';
import Divider from '@material-ui/core/Divider';
// import ShareboardEssayList from '../components/ShareboardEssayList'
import ShareboardUserList from '../components/ShareboardUserList';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
// import HistoryIcon from '@material-ui/icons/History';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import ShareboardEssay from '../components/ShareboardEssay';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import EssayTab from '../components/EssayTab';
import AutorenewIcon from '@material-ui/icons/Autorenew';
const font = "'Russo One', sans-serif";
const ShareboardHistory = () => {
  const essayList = [
    {
      title: 'History 1',
      writer: 0,
      summary: 'This is History 1.',
      essay: 'This is History 1.',
    },
    {
      title: 'History 2',
      writer: 1,
      summary: 'This is History 2.',
      essay: 'This is History 2.',
    },
    {
      title: 'History 3',
      writer: 2,
      summary: 'This isHistory 3.',
      essay: 'This is History 3.',
    },
    {
      title: 'History 4',
      writer: 3,
      summary: 'This is History 4.',
      essay: 'This is History 4.',
    },
    {
      title: 'History 5',
      writer: 0,
      summary: 'This is History 5.',
      essay: 'This is History 5.',
    },
    {
      title: 'History 6',
      writer: 1,
      summary: 'This is History 6.',
      essay: 'This is History 6.',
    },
    {
      title: 'History 7',
      writer: 2,
      summary: 'This is History 7.',
      essay: 'This is History 7.',
    },
    {
      title: 'History 8',
      writer: 3,
      summary: 'This is History 8.',
      essay: 'This is History 8.',
    },
    {
      title: 'History 9',
      writer: 0,
      summary: 'This is History 9.',
      essay: 'This is History 1.',
    },
    {
      title: 'History 10',
      writer: 1,
      summary: 'This is History 10.',
      essay: 'This is History 10.',
    },
  ];

  const colorList = ['#F95047', '#A147F9', '#00C113', '#47B9BA'];

  const userList = ['이상현', '황영주', '이진우', '강건희'];

  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const classes = useStyles();
  const history = useHistory();
  const clickHistory = () => {
    history.push('/shareboard/:id/ongoing');
  };

  return (
    <Grid direction='column'>
      <Grid>
        <ShareboardUserList userList={userList} colorList={colorList}></ShareboardUserList>
      </Grid>
      <Divider className={classes.divider} orientation='horizontal'></Divider>
      <Grid container direction='row' xs={12}>
        <Grid direction='column' xs={6} style={{ backgroundColor: '#EBE7E4' }}>
          <Grid container direction='row'>
            <WrapOngoing className={classes.fontie}>Essay History</WrapOngoing>
            <IconButton aria-label='History' onClick={clickHistory}>
              <AutorenewIcon style={{ fontSize: 35 }} />
            </IconButton>
          </Grid>
          <Divider />
          <List>
            {essayList.map((essay, index) => (
              <ListItem
                button
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <EssayTab
                  essay={essay}
                  user={userList[essay.writer]}
                  color={colorList[essay.writer]}
                ></EssayTab>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid direction='column' xs={6}>
          <ShareboardEssay index={selectedIndex} essay_info={essayList[selectedIndex]} userList={userList} />
        </Grid>
      </Grid>
    </Grid>
  );
};

const WrapOngoing = styled.div`
  font-size: 35px;
  font-weight: 700;
  margin-left: 20px;
  text-align: left;
  padding: 10px;
  fontFamily: font;
`;

const useStyles = makeStyles({
  divider: {
    background: '#EBE7E4',
  },
  fontie: {

    fontFamily: font,
  }
});

export default ShareboardHistory;
