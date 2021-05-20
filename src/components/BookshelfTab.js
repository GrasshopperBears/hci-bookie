import React from 'react';
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
        hidden={value !== index}
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
  
  export default function BookshelfTabs({ title, author, publisher, release, genre, review1, review2 }) {
    var t = `Title: ${title}`;
    var a = `Author: ${author}`;
    var p = `Publisher: ${publisher}`;
    var r = `Release: ${release}`;
    var g = `Genre: ${genre}` ;
    var re1 = review1;
    var re2 = review2;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
            <Tab label="Information" {...a11yProps(0)} />
            <Tab label="Review" {...a11yProps(1)} />
        </Tabs>
        </AppBar>
        
        <TabPanel value={value} index={0}>
            <b>{t}</b><br/>
            <b>{a}</b><br/>
            <b>{p}</b><br/>
            <b>{r}</b><br/>
            <b>{g}</b><br/>
            <br/>
            <Divider orientation='horizontal'/>
            <h4><b>Owner's comment</b></h4>
            <h4>> Fascinating.. A must-read for all people.</h4>
        </TabPanel>
        <TabPanel value={value} index={1}>
            {re1}<br/>
            <br/>
            {re2}
            <br/>
            <br/>
            <Divider orientation='horizontal'/>
        </TabPanel>
      </div>
    );
  }
