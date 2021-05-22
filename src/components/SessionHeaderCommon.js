import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const SessionHeaderComon = ({ title, likes }) => {
  return (
    <Wrapper>
      <GridStyled item xs={12} alignItems='flex-end' justify='flex-end'>
        <Typography style={{ marginBottom: '15px' }}>
          <FontAwesomeIcon icon={faHeart} color='red' size='0.5x' /> {likes || 0} likes
        </Typography>
      </GridStyled>
      <BookinfoWrapper>
        <Typography variant='h4' style={{ fontWeight: 600, marginBottom: '15px' }}>
          {title}
        </Typography>
        <HorizonLine />
      </BookinfoWrapper>
    </Wrapper>
  );
};

const HorizonLine = () => {
  return (
    <div
      style={{
        width: '30%',
        textAlign: 'center',
        borderBottom: '5px solid #EC9F05',
        lineHeight: '0.1em',
        margin: '10px 0 15px',
      }}
    />
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  > div {
    width: 100%;
  }
`;

const GridStyled = styled(Grid)`
  display: flex;
  height: 100%;
  width: 100%;
`;

const BookinfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: '20px';
  max-width: 100%;
`;

export default SessionHeaderComon;
