import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUsers, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';

const SessionDetailHeader = ({ info }) => {
  const { title, likes, dateTime, participants } = info;

  return (
    <Grid container spacing={1}>
      <GridStyled item xs={12} alignItems='flex-end' justify='flex-end'>
        <Typography variant='h7' style={{ marginBottom: '15px' }}>
          <FontAwesomeIcon icon={faHeart} color='red' size='0.5x' /> {likes || 0} likes
        </Typography>
      </GridStyled>
      <GridStyled item xs={12} direction='column' alignItems='center' justify='flex-start'>
        <BookinfoWrapper>
          <Typography variant='h4' style={{ fontWeight: 600, marginBottom: '15px' }}>
            {title}
          </Typography>
        </BookinfoWrapper>
        <HorizonLine />
        <BookinfoWrapper>
          <Typography variant='h5' style={{ marginBottom: '15px' }}>
            {moment(dateTime).diff(moment(), 'days')} days left to enroll!
          </Typography>
        </BookinfoWrapper>
        <BookinfoWrapper>
          <Typography variant='h' style={{ marginBottom: '15px' }}>
            <Typography variant='h7' style={{ marginBottom: '15px' }}>
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

const HorizonLine = () => {
  return (
    <div
      style={{
        width: '30%',
        textAlign: 'center',
        borderBottom: '5px solid #EC9F05',
        lineHeight: '0.1em',
        margin: '10px 0 20px',
      }}
    ></div>
  );
};

export default SessionDetailHeader;
