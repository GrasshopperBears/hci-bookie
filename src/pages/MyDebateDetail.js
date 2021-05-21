import React from 'react';
import MyDebateBody from '../components/MyDebateBody';

const info = {
  imgUrl: 'https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg',
  title: 'Book Title',
  date: new Date(),
  lastDebate: new Date(),
  nextDebate: new Date(),
  host: '123',
  joinList: [],
  description:
    'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add    1 cup of frozen peas along with the mussels, if you like.arty dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
  genre: 'Social',
  peopleNumber: 7,
  author: 'Jacoddddddddddddddddd',
  publisher: 'PEARSON',
  publshDate: '2020.15.14',
  tags: ['S.F.', 'fun', 'novel'],
};
const MyDebateDetail = () => {
  return (
    <div>
      < MyDebateBody info={info} />
    </div>
  );
};

export default MyDebateDetail;