import React from 'react';
import styled from 'styled-components';
import { Grid, List, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShareboardUserTab from './ShareboardUserTab';
import { FaFilter } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ShareboardUserList = ({ users, filter, filterUser }) => {
  const classes = useStyles();
  return (
    <Wrapper>
      <FilterTitle>
        <FaFilter style={{ color: 'grey' }} className={classes.icon} />
        <Typography className={classes.smallgrey}>Filter by user | </Typography>
      </FilterTitle>
      <List style={{ marginLeft: '20px' }}>
        <Grid container direction='row' justify='flex-start' spacing='2'>
          {users.map((user) => (
            <Grid item button alignItems='center'>
              <ShareboardUserTab user={user} filter={filter} selected={user.uid === filterUser} />
            </Grid>
          ))}
        </Grid>
      </List>
      <IconButton
        onClick={() => {
          filter(undefined);
        }}
      >
        <AiOutlineCloseCircle />
      </IconButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 10px;
`;

const FilterTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-width: 170px;
`;

const useStyles = makeStyles({
  smallgrey: {
    color: 'grey',
    padding: '10px 10px 10px 10px',
    fontSize: '1.0rem',
    fontWeight: 'bold',
  },
});
export default ShareboardUserList;
