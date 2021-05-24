import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import firebase from '../firebase-config';
import PropTypes from 'prop-types';
import { AppBar, Tab, Tabs, Typography, Divider, Box, Button } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      style={{ display: value !== index && 'none' }}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BookshelfTabs({ info, isOwner }) {
  const { title, authors, publisher, datetime } = info.bookInfo;
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const setBestBook = async () => {
    await firebase
      .firestore()
      .collection('bookshelf')
      .doc(firebase.auth().currentUser.uid)
      .update({ bestBook: info });
    alert('The book has set as the best book');
    history.goBack();
  };

  return (
    <Tabstyle>
      <AppBar position='static' color='transparent'>
        <Tabs value={value} onChange={handleChange}>
          <Tab label='Information' {...a11yProps(0)} />
          <Tab label='Review' {...a11yProps(1)} />
          {isOwner && (
            <>
              <div style={{ flex: '1' }} />
              <Button onClick={setBestBook} style={{ padding: ' 0 15px' }}>
                Set my best book
              </Button>
            </>
          )}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <InfoText variant='body1'>Title: {title}</InfoText>
        <InfoText variant='body1'>Authos: {authors?.join(', ') || ''}</InfoText>
        <InfoText variant='body1'>Publisher: {publisher}</InfoText>
        <InfoText variant='body1'>Release: {moment(datetime).format('YYYY-MM-DD')}</InfoText>
        <Divider orientation='horizontal' style={{ margin: '20px 0' }} />
        <Typography variant='h6' style={{ marginBottom: '20px' }}>
          Owner's comment
        </Typography>
        <Typography variant='body1' style={{ paddingLeft: '30px' }}>
          {info.comment}
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant='body1' style={{ paddingTop: '20px' }}>
          {info.review}
        </Typography>
      </TabPanel>
    </Tabstyle>
  );
}

const Tabstyle = styled.div`
  margin-top: 100px;
  padding: 0 50px;
`;

const InfoText = styled(Typography)`
  margin: 10px 0 !important;
`;
