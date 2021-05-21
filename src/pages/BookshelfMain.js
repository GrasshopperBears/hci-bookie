import React from 'react';
import styled from 'styled-components';
import { Divider, Card, CardActionArea, Typography } from '@material-ui/core';
import BookshelfCard from '../components/BookshelfCard';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router';


const BookshelfMain = () => {
  const imgUrl1 = "https://images-na.ssl-images-amazon.com/images/I/41Ojcfxmn1L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"; 
  const imgUrl2 = "https://images-na.ssl-images-amazon.com/images/I/41lJWligwkL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
  const imgUrl3 = "https://images-na.ssl-images-amazon.com/images/I/41qYrnXYdPL._SX332_BO1,204,203,200_.jpg";
  const imgUrl4 = "https://images-na.ssl-images-amazon.com/images/I/51Xy6y7I-JL._SX329_BO1,204,203,200_.jpg";
  const imgUrl5 = "https://images-na.ssl-images-amazon.com/images/I/51Ifl1zXhJL._SX329_BO1,204,203,200_.jpg";
  const imgUrl6 = "https://images-na.ssl-images-amazon.com/images/I/51G3UYYfKFL._SX329_BO1,204,203,200_.jpg";
  
  const history = useHistory();
  const clickHandler = () => {
    history.push('/bookshelf/add');
  }

  return (
    <Grid container justify="flex-start" xs={12}>
      <Grid item>
        <BookshelfCard imgUrl={imgUrl1}/>
      </Grid>
      <Grid item>
        <BookCardStyle>
          <Grid container direction="row" justify="flex-start" spacing="0">
              <Grid item>
                <BookshelfCard imgUrl={imgUrl2} size="small"/>
              </Grid>
              <Grid item> 
                <BookshelfCard imgUrl={imgUrl3} size="small"/>
              </Grid>
              <Grid item>
                <BookshelfCard imgUrl={imgUrl4} size="small"/>
              </Grid>
          </Grid>
          <Divider orientation='horizontal'/>
          <Grid container direction="row" justify="flex-start" spacing="0">
              <Grid item>
                <BookshelfCard imgUrl={imgUrl5} size="small"/>
              </Grid>
              <Grid item> 
                <BookshelfCard imgUrl={imgUrl6} size="small"/>
              </Grid>
              <Wrapper>
                <CardActionArea onClick={clickHandler}>
                  <Typography variant='h6'>
                    Add Book
                  </Typography>
                </CardActionArea>
              </Wrapper>
          </Grid>
        </BookCardStyle>  
      </Grid>

    </Grid>
  );
};

const BookCardStyle = styled.div`
  flexDirection: row
`;

const Wrapper = styled(Card)`
  position: block;
  width: 150px;
  height: 250px;
  margin: 50px;
  > button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export default BookshelfMain;
