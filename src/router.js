import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Pages from './pages';
import Banner from './components/Banner';
import firebase from './firebase-config';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Banner />
      <Switch>
        <Route exact path='/' component={Pages.MainPage} />
        <UnauthorizedRouter exact path='/signup' component={Pages.Signup} />
        <UnauthorizedRouter exact path='/signin' component={Pages.Signin} />
        <AuthorizedRouter exact path='/my-debate/:id' component={Pages.MyDebateDetail} />
        <AuthorizedRouter exact path='/session/create' component={Pages.CreateSession} />
        <Route exact path='/session/detail/:id' component={Pages.SessionDetail} />
        <AuthorizedRouter exact path='/bookshelf/add' component={Pages.AddMyBookmark} />
        <Route exact path='/bookshelf/detail' component={Pages.BookshelfDetail} />
        <Route exact path='/bookshelf/:id' component={Pages.BookshelfMain} />
        <Route exact path='/shareboard/:id/ongoing' component={Pages.ShareboardOngoing} />
        <Route exact path='/shareboard/:id/history' component={Pages.ShareboardHistory} />
        <AuthorizedRouter exact path='/shareboard/:id/add' component={Pages.AddEssay} />
        <Route component={Pages.NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const AuthorizedRouter = ({ exact, path, component }) => {
  return firebase.auth().currentUser != null ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
    <Redirect to='/' />
  );
};

const UnauthorizedRouter = ({ exact, path, component }) => {
  return firebase.auth().currentUser == null ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
    <Redirect to='/' />
  );
};

export default MainRouter;
