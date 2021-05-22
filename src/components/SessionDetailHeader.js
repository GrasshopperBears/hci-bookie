import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import SessionHeaderComon from './SessionHeaderCommon';

const SessionDetailHeader = ({ info }) => {
  const { title, likes, dateTime, participants } = info;

  return (
    <Grid container spacing={1}>
      <SessionHeaderComon title={title} likes={likes} />
      <GridStyled item xs={12} direction='column' alignItems='center' justify='flex-start'>
        <BookinfoWrapper>
          <Typography variant='h6' style={{ marginBottom: '15px' }}>
            {moment(dateTime).diff(moment(), 'days')} days left to enroll!
          </Typography>
        </BookinfoWrapper>
        <BookinfoWrapper>
          <Typography style={{ marginBottom: '15px' }}>
            <Typography style={{ marginBottom: '15px' }}>
              <IconWithMargin icon={faCalendar} size='0.5x' />
              {moment(dateTime).format('mm/DD, HH:MM')}
              <IconWithMargin icon={faUsers} size='0.5x' />
              {participants.length} members
            </Typography>
          </Typography>
        </BookinfoWrapper>
      </GridStyled>
    </Grid>
  );
};

const GridStyled = styled(Grid)`
  display: flex;
  height: 100%;
  width: 100%;
`;
const BookinfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: '20px';
  max-width: 100%;
`;

const IconWithMargin = styled(FontAwesomeIcon)`
  margin: 0 10px 0 30px;
  color: grey;
`;

export default SessionDetailHeader;
