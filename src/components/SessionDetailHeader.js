import React from 'react';
import moment from 'moment';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUsers, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Grid, Typography, Divider } from '@material-ui/core';
import styled from 'styled-components';

const SessionDetailHeader = ({ info }) => {
  const { debateTitle, likes, date, peopleNumber } = info;

  return (
    <Grid container spacing={1} >
      <GridStyled item xs={12} alignItems='flex-end' justify='flex-end'>
        <Typography variant='h7' style={{ marginBottom: '15px' }}>
          <FontAwesomeIcon icon={faHeart} color="red" size='0.5x' /> {likes} likes
        </Typography>
      </GridStyled>

      <GridStyled item xs={12} direction='column' alignItems='center' justify='flex-start'>
        <BookinfoWrapper>
          <Typography variant='h4' style={{ fontWeight: 600, marginBottom: '15px' }}>
            {debateTitle}
          </Typography>
        </BookinfoWrapper>
        <HorizonLine />
        <BookinfoWrapper>
          <Typography variant='h5' style={{ marginBottom: '15px' }}>
            {dateDiff(date)} days left to enroll!
          </Typography>
        </BookinfoWrapper>
        <BookinfoWrapper>
          <Typography variant='h' style={{ marginBottom: '15px' }}>

            <Typography variant='h7' style={{ marginBottom: '15px' }}>

              <FontAwesomeIcon icon={faCalendar} color="grey" size='0.5x' /> {dateString(date)}
              <FontAwesomeIcon icon={faUsers} color="grey" size='0.5x' /> {peopleNumber} members
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

const HorizonLine = ({ w }) => {
  return (
    <div
      style={{
        width: "30%",
        textAlign: "center",
        borderBottom: "5px solid #EC9F05",
        lineHeight: "0.1em",
        margin: "10px 0 20px",
      }}
    >
    </div>
  );
};
const dateDiff = (d) => {
  let today = new Date();
  console.log(today);
  var diff = Math.ceil((d.getTime() - today.getTime()) / (1000 * 3600 * 24)) - 1;
  if (diff <= 0) return 0;
  else return diff;
}
const dateString = (d) => {
  let date = d.getDate();
  let mon = d.getMonth();
  let month = "";
  if (mon == 0) month = "January"
  else if (mon == 1) month = "Febuary"
  else if (mon == 2) month = "March"
  else if (mon == 3) month = "April"
  else if (mon == 4) month = "May"
  else if (mon == 5) month = "June"
  else if (mon == 6) month = "July"
  else if (mon == 7) month = "August"
  else if (mon == 8) month = "September"
  else if (mon == 9) month = "October"
  else if (mon == 10) month = "November"
  else if (mon == 11) month = "December"
  if (date == 1 || date == 21 || date == 31) date = date + "st"
  else if (date == 2 || date == 22) date = date + "nd"
  else if (date == 3 || date == 23) date = date + "rd"
  else date = date + "th"
  return month + " " + date + ", " + d.getHours() + ":" + d.getMinutes() + " ,   ";
}
export default SessionDetailHeader;