import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Divider } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      display={value !== index && "none"}
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

export default function BookshelfTabs({ title, author, publisher, release, genre, review1, review2, comment }) {
  var t = `Title: ${title}`;
  var a = `Author: ${author}`;
  var p = `Publisher: ${publisher}`;
  var r = `Release: ${release}`;
  var g = `Genre: ${genre}`;

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabstyle>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Information" {...a11yProps(0)} />
            <Tab label="Review" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Divider orientation='horizontal' />
          <br />
          <b>{t}</b><br />
          <b>{a}</b><br />
          <b>{p}</b><br />
          <b>{r}</b><br />
          <b>{g}</b><br />
          <br />
          <Divider orientation='horizontal' />
          <h4><b>Owner's comment</b></h4>
          <h4>{comment}</h4>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Divider orientation='horizontal' />
          <br />
          {review1}<br />
          <br />
          {review2}
          <br />
          <br />
          <Divider orientation='horizontal' />
        </TabPanel>
      </Tabstyle>
    </div>
  );
}

const Tabstyle = styled.div`
  float: left;
  margin: 100px;
  width: 60%;
`;