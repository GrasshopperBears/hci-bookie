import React from 'react';
import RecentlyAddedSession from '../components/RecentlyAddedSession';
import MainPageMySessions from '../components/MainPageMySessions';
import firebase from '../firebase-config';

const MainPage = () => {
  return (
    <div>
      {firebase.auth().currentUser && <MainPageMySessions />}
      <RecentlyAddedSession />
    </div>
  );
};

export default MainPage;
