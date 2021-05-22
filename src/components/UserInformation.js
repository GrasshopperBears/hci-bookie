import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';

const UserInformation = ({ isHost, info }) => {
  const { profileImg, displayName, quote } = info;

  return (
    <Grid container spacing={1} direction='row' alignItems='center' justify='flex-start'>
      <Typography variant='body1' style={{ color: 'grey', margin: '0 20px 0 0' }}>
        {isHost ? 'Host' : 'Participant'}
      </Typography>
      <ProfileImg
        src={profileImg || process.env.PUBLIC_URL + '/default-profile.png'}
        style={{ margin: '10px 20px 10px 0' }}
        alt='book cover'
      />
      <Typography variant='body1' style={{ color: 'black', fontWeight: 'bold', margin: '0 15px 0 0' }}>
        {displayName || 'Anonymous user'}
      </Typography>
      <Typography variant='body2' style={{ color: 'grey', fontStyle: 'italic', margin: '0 10px 0 0' }}>
        {quote || ''}
      </Typography>
    </Grid>
  );
};

const ProfileImg = styled.img`
  width: 1.9rem;
  height: 1.9rem;
`;

export default UserInformation;
