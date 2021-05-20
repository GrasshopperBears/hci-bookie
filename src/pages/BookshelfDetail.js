import React from 'react';
import styled from 'styled-components';
import BookshelfTabs from '../components/BookshelfTab';

const BookshelfDetail = () => {
  const title = "Think Again: The Power of Knowing What You Don’t Know";
  const author = "Adam M. Grant";
  const publisher = "Viking";
  const release = "2021.02.02";
  const genre = "Economy, Management, Human Resource Management";
  const review1 = " Think Again is a book about the benefit of doubt, and about how we can get better at embracing the unknown and the joy of being wrong. Evidence has shown that creative geniuses are not attached to one identity, but constantly willing to rethink their stances and that leaders who admit they don't know something and seek critical feedback lead more productive and innovative teams.\n New evidence shows us that as a mindset and a skilllset, rethinking can be taught and Grant explains how to develop the necessary qualities to do it. Section 1 explores why we struggle to think again and how we can learn to do it as individuals, arguing that 'grit' alone can actually be counterproductive. Section 2 discusses how we can help others think again through learning about 'argument literacy'. And the final section 3 looks at how schools, businesses and governments fall short in building cultures that encourage rethinking.";
  const review2 = " New evidence shows us that as a mindset and a skilllset, rethinking can be taught and Grant explains how to develop the necessary qualities to do it. Section 1 explores why we struggle to think again and how we can learn to do it as individuals, arguing that 'grit' alone can actually be counterproductive. Section 2 discusses how we can help others think again through learning about 'argument literacy'. And the final section 3 looks at how schools, businesses and governments fall short in building cultures that encourage rethinking.";
  
  return (
    <BookshelfWrapper>
      <BookshelfTabs title={title} author={author} publisher={publisher} release={release} genre={genre} review1={review1} review2={review2}>
     </BookshelfTabs>
    </BookshelfWrapper>
  );
};

const BookshelfWrapper = styled.div`
  text-align: left;
`;
export default BookshelfDetail;
