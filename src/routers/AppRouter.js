import { Route, Link, NavLink, BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import AddExpense from '../components/AddExpense';
import Help from '../components/Help';
import ExpenseDashboard from '../components/ExpenseDashboard';
import NotFound from '../components/NotFound';
import EditExpense from '../components/EditExpense';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
