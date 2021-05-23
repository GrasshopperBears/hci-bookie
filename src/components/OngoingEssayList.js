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
import EssayTab from './EssayTab'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const OngoingEssayList = ({ essayList }) => {
  return (
    <div>
      <List>
        {essayList.map((essay) => (
          <ListItem button>
            <EssayTab essay={essay}></EssayTab>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default OngoingEssayList;