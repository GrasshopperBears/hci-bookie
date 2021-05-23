import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import MyDebateBody from '../components/MyDebateBody';
import Loading from '../components/Loading';
import firebase from '../firebase-config';

const MyDebateDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [bookInfo, setBookInfo] = useState(undefined);

  const fetchData = async () => {
    const result = await firebase.firestore().collection('sessions').doc(id).get();
    if (!result.exists) history.push('/');
    setBookInfo(result.data());
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return bookInfo ? (
    <div style={{ marginBottom: '50px' }}>
      <MyDebateBody info={bookInfo} />
    </div>
  ) : (
    <Loading />
  );
};

export default MyDebateDetail;
