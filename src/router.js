import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Pages from './pages';
import firebase from './firebase-config';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Pages.MainPage} />
        <UnauhorizedRouter exact path='/signup' component={Pages.Signup} />
        <UnauhorizedRouter exact path='/signin' component={Pages.Signin} />
        <AuhorizedRouter exact path='/my-debate/:id' component={Pages.MyDebateDetail} />
        <AuhorizedRouter exact path='/session/create' component={Pages.CreateSession} />
        <Route exact path='/session/detail/:id' component={Pages.SessionDetail} />
        <Route exact path='/bookshelf/:id' component={Pages.BookshelfMain} />
        <Route exact path='/bookshelf/detail/:id' component={Pages.BookshelfDetail} />
        <AuhorizedRouter exact path='/bookshelf/add' component={Pages.AddMyBookmark} />
        <Route exact path='/shareboard/:id/ongoing' component={Pages.ShareboardOngoing} />
        <Route exact path='/shareboard/:id/history' component={Pages.ShareboardHistory} />
        <AuhorizedRouter exact path='/shareboard/:id/add' component={Pages.AddEssay} />
        <Route component={Pages.NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const AuhorizedRouter = ({ exact, path, component }) => {
  return firebase.auth().currentUser != null ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
    <Redirect to='/' />
  );
};

const UnauhorizedRouter = ({ exact, path, component }) => {
  return firebase.auth().currentUser == null ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
    <Redirect to='/' />
  );
};

export default MainRouter;
