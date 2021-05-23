import React from 'react';
import Divider from '@material-ui/core/Divider';
import ShareboardEssayList from '../components/ShareboardEssayList'
import ShareboardUserList from '../components/ShareboardUserList'
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import HistoryIcon from '@material-ui/icons/History';
import { useHistory } from 'react-router';
import { makeStyles } from "@material-ui/core/styles";
import ShareboardEssay from '../components/ShareboardEssay'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import EssayTab from '../components/EssayTab'



const ShareboardOngoing = () => {
  const essayList = [
    {
      title : 'My Funny Life',
      writer : '이상현',
      summary : 'Summary 1',
      essay: 'Essay 1'
    },
    {
      title : 'Family Day',
      writer : '황영주',
      summary : 'Summary 2',
      essay: 'Essay 2'
    },
    {
      title : 'Our Hope',
      writer : '이진우',
      summary : 'Summary 3',
      essay: 'Essay 3'
    }
  ]

  const userList = [
    '이상현',
    '황영주',
    '이진우',
    '강건희'
  ]

  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const classes = useStyles();
  const history = useHistory();
  const clickHistory = () => {
    history.push('/shareboard/:id/history');
  }

  return (
    <Grid direction='column'>
      <Grid>
        <ShareboardUserList userList={userList}></ShareboardUserList>
      </Grid>
      <Divider className={classes.divider} orientation='horizontal'></Divider>
      <Grid container direction='row' xs={12}>
        <Grid direction='column' xs={6} style={{ backgroundColor: '#EBE7E4' }}>
          <Grid container direction='row'>
            <WrapOngoing>
              Ongoing Essay
            </WrapOngoing>
            <IconButton aria-label="History" onClick={clickHistory}>
              <HistoryIcon style={{ fontSize: 35 }}/>
            </IconButton>
          </Grid>
          <Divider/>
          <List>
            {essayList.map((essay, index) => (
              <ListItem button selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}>
                <EssayTab essay={essay}></EssayTab>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid direction='column' xs={6}>
          <ShareboardEssay index={selectedIndex} essay_info={essayList[selectedIndex]}/>
        </Grid>
      </Grid>
    </Grid>
  )
};

const WrapOngoing = styled.div`
  font-size: 35px;
  font-weight: 700;
  margin-left: 20px;
  text-align: left;
  padding: 10px;
`;

const useStyles = makeStyles({
  divider: {
      background: "#EBE7E4",
  }
});

export default ShareboardOngoing;
