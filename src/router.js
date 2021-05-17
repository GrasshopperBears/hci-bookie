import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pages from './pages';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Pages.MainPage} />
        <Route exact path='/my-debate/:id' component={Pages.MyDebateDetail} />
        <Route exact path='/session/create' component={Pages.CreateSession} />
        <Route exact path='/session/detail/:id' component={Pages.SessionDetail} />
        <Route exact path='/bookshelf/:id' component={Pages.BookshelfMain} />
        <Route exact path='/bookshelf/detail/:id' component={Pages.BookshelfDetail} />
        <Route exact path='/bookshelf/add' component={Pages.AddMyBookmark} />
        <Route exact path='/shareboard/:id/ongoing' component={Pages.ShareboardOngoing} />
        <Route exact path='/shareboard/:id/history' component={Pages.ShareboardHistory} />
        <Route exact path='/shareboard/:id/add' component={Pages.AddEssay} />
        <Route component={Pages.NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
