import React from 'react';
import moment from 'moment';
import { } from '@material-ui/core';
import styled from 'styled-components';

import { Grid, Typography } from '@material-ui/core';

const UserInformation = ({ info }) => {
    const { role, profileImg, name, quote } = info;

    return (
        <Grid container spacing={1} >
            <GridStyled item xs={12} direction='row' alignItems='center' justify='flex-start' justifyContent='flex-center'>
                <Typography variant='h7' style={{ color: 'grey', margin: '0 20px 0 0' }}>
                    {role}
                </Typography>
                <ProfileImg src={profileImg} style={{ margin: '10px 10px 10px 0' }} alt='book cover' />
                <Typography variant='h8' style={{ color: 'black', fontWeight: 'bold', margin: '0 15px 0 0' }}>
                    {name}
                </Typography>
                <Typography variant='h8' style={{ color: 'grey', fontStyle: 'italic', margin: '0 10px 0 0' }}>
                    {quote}
                </Typography>
            </GridStyled>
        </Grid >
    );
};

const GridStyled = styled(Grid)`
  display: flex;
  height: 100%;
  width: 100%;
`;
const ProfileImg = styled.img`
  max-width: 5%;
  max-height: 5%;
`;
export default UserInformation;
