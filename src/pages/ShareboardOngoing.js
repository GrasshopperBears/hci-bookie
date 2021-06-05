import React, { useEffect, useState } from 'react';
import ShareboardUserList from '../components/ShareboardUserList';
import { Grid, Divider, List, ListItem, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ShareboardEssay from '../components/ShareboardEssay';
import EssayTab from '../components/EssayTab';
import AddEssayButton from '../components/AddEssayButton';
import firebase from '../firebase-config';
import CenterDiv from '../components/CenterDiv';
const font = "'Russo One', sans-serif";

const db = firebase.firestore();

const ShareboardOngoing = () => {
  const { id } = useParams();
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const [authorized, setAuthorized] = useState(false);
  const [essayList, setEssayList] = useState([]);
  const [commnetList, setCommentList] = useState({});
  const [userList, setUserList] = useState([]);
  const [filterUser, setFilterUser] = useState(undefined);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const classes = useStyles();
  const history = useHistory();

  const updateAuthority = (host, participants) => {
    const { currentUser } = firebase.auth();
    if (host.uid === currentUser.uid) return setAuthorized(true);
    if (participants.findIndex((participant) => participant.uid === currentUser.uid) >= 0)
      setAuthorized(true);
  };

  const fetchComments = async (len) => {
    const comments = {};
    for (let i = 0; i < len; i++) {
      const reusult = await db.collection('sessions').doc(`${id}/comments/${i}`).get();
      comments[i] = reusult.exists ? reusult.data() : {};
    }
    setCommentList(comments);
  };

  const fetchEssays = async () => {
    const result = await db.collection('sessions').doc(id).get();
    if (!result.exists) return;
    const data = result.data();
    setEssayList(data.essays);
    setUserList([data.host, ...data.participants]);
    updateAuthority(data.host, data.participants);
    fetchComments(data.essays.length);
  };
  useEffect(() => {
    fetchEssays();
  }, [id]);
  const filterHandler = (uid) => {
    setFilterUser(uid === filterUser ? undefined : uid);
  };

  return (
    <Grid direction='column'>
      <Grid>
        <ShareboardUserList users={userList} filter={filterHandler} filterUser={filterUser} />
      </Grid>
      <Divider className={classes.divider} orientation='horizontal'></Divider>
      <Grid container direction='row' xs={12}>
        <Grid direction='column' xs={5} style={{ backgroundColor: '#EBE7E4' }}>
          <Grid container direction='row'>
            <WrapOngoing className={classes.fontie}>Ongoing Essay</WrapOngoing>
          </Grid>
          <Divider />
          {authorized && (
            <ListItem
              button
              onClick={() => {
                history.push(`/shareboard/${id}/add`);
              }}
            >
              <AddEssayButton />
            </ListItem>
          )}
          <List>
            {essayList.map((essay, index) => {
              if (filterUser && filterUser !== essay.uid) return <></>;
              return (
                <ListItem
                  button
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                >
                  <EssayTab info={essay} />
                </ListItem>
              );
            })}
            {essayList.length === 0 && (
              <CenterDiv>
                <Typography variant='overline' style={{ fontSize: '1rem', marginTop: '5rem' }}>
                  There is no essay yet
                </Typography>
              </CenterDiv>
            )}
          </List>
        </Grid>
        <Grid direction='column' xs={7}>
          <ShareboardEssay
            info={essayList[selectedIndex]}
            comments={commnetList[selectedIndex]}
            idx={selectedIndex}
            authorized={authorized}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const WrapOngoing = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-left: 20px;
  text-align: left;
  padding: 10px;
`;

const useStyles = makeStyles({
  divider: {
    background: '#EBE7E4',
  },
  fontie: {
    fontFamily: font,
  },
});

export default ShareboardOngoing;
