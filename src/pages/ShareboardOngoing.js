import React from 'react';
import Divider from '@material-ui/core/Divider';
import OngoingEssayList from '../components/OngoingEssayList'
import ShareboardUserList from '../components/ShareboardUserList'
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import HistoryIcon from '@material-ui/icons/History';
import { useHistory } from 'react-router';
import { makeStyles } from "@material-ui/core/styles";



const ShareboardOngoing = () => {
  const essayList = [
    {
      title : 'My Funny Life',
      writer : '이상현'
    },
    {
      title : 'Family Day',
      writer : '황영주'
    },
    {
      title : 'Our Hope',
      writer : '이진우'
    }
  ]

  const userList = [
    '이상현',
    '황영주',
    '이진우',
    '강건희'
  ]

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
          <OngoingEssayList essayList={essayList} />
        </Grid>
        <Grid direction='column' xs={6}>
          <div>EssayPreview</div>
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
