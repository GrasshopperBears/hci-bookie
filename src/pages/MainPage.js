import React from 'react';
import RecentlyAddedSession from '../components/RecentlyAddedSession';
import MainPageMySessions from '../components/MainPageMySessions';

const MainPage = () => {
  return (
    <div>
      <MainPageMySessions />
      <RecentlyAddedSession />
    </div>
  );
};

export default MainPage;
