import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

const UserInformation = ({ isHost, info }) => {
  const { profileImg, displayName, quote, uid } = info;
  const history = useHistory();

  const clickHandler = () => {
    if (uid) history.push(`/bookshelf/${uid}`);
  };

  return (
    <Wrapper
      container
      spacing={1}
      direction='row'
      alignItems='center'
      justify='flex-start'
      onClick={clickHandler}
      hasUser={!!uid}
    >
      <Grid item md={1}>
        <Typography variant='body2' style={{ color: 'grey', margin: '0 20px 0 0', textAlign: 'center' }}>
          {isHost ? 'Host' : 'Participant'}
        </Typography>
      </Grid>
      <Grid item>
        <ProfileImg
          src={profileImg || process.env.PUBLIC_URL + '/default-profile.png'}
          style={{ margin: '10px 20px 10px 0' }}
          alt='book cover'
        />
      </Grid>
      <Grid item>
        <Typography variant='body1' style={{ color: 'black', fontWeight: 'bold', margin: '0 15px 0 0' }}>
          {displayName || 'Anonymous user'}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body2' style={{ color: 'grey', fontStyle: 'italic', margin: '0 10px 0 0' }}>
          {quote || ''}
        </Typography>
      </Grid>
    </Wrapper>
  );
};

const ProfileImg = styled.img`
  width: 1.9rem;
  height: 1.9rem;
`;

const Wrapper = styled(Grid)`
  :hover {
    cursor: ${(props) => props.hasUser && 'pointer'};
    background-color: ${(props) => props.hasUser && 'rgba(30, 30, 30, 0.1)'};
  }
`;

export default UserInformation;
