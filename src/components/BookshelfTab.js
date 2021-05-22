import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { AppBar, Tab, Tabs, Typography, Divider, Box } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      display={value !== index && 'none'}
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function BookshelfTabs({ title, author, publisher, release, review, comment }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabstyle>
      <AppBar position='static' color='transparent'>
        <Tabs value={value} onChange={handleChange}>
          <Tab label='Information' {...a11yProps(0)} />
          <Tab label='Review' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <InfoText variant='body1'>Title: {title}</InfoText>
        <InfoText variant='body1'>Authos: {author}</InfoText>
        <InfoText variant='body1'>Publisher: {publisher}</InfoText>
        <InfoText variant='body1'>Release: {release}</InfoText>
        <Divider orientation='horizontal' style={{ margin: '20px 0' }} />
        <Typography variant='h6' style={{ marginBottom: '20px' }}>
          Owner's comment
        </Typography>
        <Typography variant='body1' style={{ paddingLeft: '30px' }}>
          {comment}
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant='body1' style={{ paddingTop: '20px' }}>
          {review}
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
