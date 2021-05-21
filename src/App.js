import React, { useState, useEffect } from 'react';
import firebase from './firebase-config';
import MainRouter from './router';
import Loading from './components/Loading';
import './App.css';

const App = () => {
  const [userInitialized, setUserInitialized] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!userInitialized) setUserInitialized(true);
    });
    return unsubscribe;
  }, []);

  return userInitialized ? (
    <div className='App' style={{ padding: '0 200px' }}>
      <MainRouter />
    </div>
  ) : (
    <Loading />
  );
};

export default App;
