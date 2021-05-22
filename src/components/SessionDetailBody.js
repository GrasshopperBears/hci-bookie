import React from 'react';
import { useHistory } from 'react-router-dom';
import UserInformation from '../components/UserInformation';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Grid, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';

const SessionDetailBody = ({ info }) => {
  const {
    briefDescription,
    title,
    bookInfo: { authors, publisher, thumbnail },
    genre,
    content,
    // likes,
    participants,
    host: { displayName: hostName },
  } = info;
  const history = useHistory();
  const hostInfo = { name: hostName };

  const button_shareboard = () => {
    history.push('/shareboard/asd/add');
  };
  const button_apply = () => {
    history.push('/session/detail/asd');
  };

  return (
    <Grid container spacing={1}>
      <GridStyled item xs={12} alignItems='center' direction='column' justify='flex-start'>
        <Typography
          variant='body2'
          style={{
            backgroundColor: '#EEEEEE',
            padding: '20px 100px 20px 100px',
            maxWidth: '100%',
            marginBottom: '40px',
          }}
        >
          {briefDescription.split('/n').map((line) => (
            <p>{line}</p>
          ))}
        </Typography>
        <Typography variant='h4' style={{ fontWeight: 600, marginBottom: '10px' }}>
          {title}
        </Typography>
        <Typography variant='body1' style={{ marginBottom: '5px' }}>
          Author : {authors.join(', ')}
        </Typography>
        <Typography variant='body1' style={{ marginBottom: '5px' }}>
          Publisher : {publisher}
        </Typography>
        <BookinfoWrapper>
          <BookCover src={thumbnail} alt='book cover' />
        </BookinfoWrapper>
        <BookinfoWrapper style={{ margin: '10px 0 30px' }}>
          <Typography style={{ marginRight: '30px' }}>#{genre}</Typography>
          {/* {tags.map((el) => (
            <Typography style={{ marginRight: '30px' }}>#{el}</Typography>
          ))} */}
        </BookinfoWrapper>

        <HorizonLine w='100%' m='10px 0 -5px 0' b='5px solid #EEEEEE' />
        <HorizonLine w='10%' m='0 0 30px 0 ' b='5px solid #EC9F05' />

        <Typography variant='body1' style={{ maxWidth: '100%', marginBottom: '20px' }}>
          {content.split('/n').map((line) => (
            <p>{line}</p>
          ))}
        </Typography>
        {/* <BookinfoWrapper style={{ width: '100%', justifyContent: 'flex-end' }}>
          <Typography align='right' style={{ marginBottom: '5px', maxWidth: '100%' }}>
            <FontAwesomeIcon icon={faHeart} color='red' size='0.5x' /> {likes || 0} likes
          </Typography>
        </BookinfoWrapper> */}
        <HorizonLine w='100%' m='0 0 10px 0' b='5px solid #EEEEEE' />
        <Typography
          variant='h6'
          style={{ color: 'grey', width: '100%', justifyContent: 'flex-end', marginBottom: '20px' }}
        >
          Current participant
        </Typography>
        <UserInformation isHost info={hostInfo} />
        {participants.map((p) => (
          <UserInformation info={p} />
        ))}
        <HorizonLine w='100%' m='10px 0 20px 0 ' b='5px solid #EC9F05' />
      </GridStyled>
      <GridStyled item xs={12} alignItems='center' direction='row' justify='center'>
        <Button
          variant='contained'
          onClick={button_shareboard}
          color='grey'
          style={{ margin: '0 20px 0 0', padding: '5px 20px 5px 20px' }}
        >
          Share board
        </Button>
        <Button
          variant='contained'
          onClick={button_apply}
          color='primary'
          style={{ margin: '0 20px 0 0', padding: '5px 40px 5px 40px' }}
        >
          Apply
        </Button>
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
const BookCover = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: 20px 0;
`;
const HorizonLine = ({ w, m, b }) => {
  return (
    <div
      style={{
        width: w,
        textAlign: 'center',
        align: 'center',
        borderBottom: b,
        lineHeight: '0.1em',
        margin: m,
      }}
    ></div>
  );
};

export default SessionDetailBody;
