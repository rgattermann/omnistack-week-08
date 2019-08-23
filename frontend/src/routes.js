import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import Main from './pages/Main';
import Login from './pages/Login';
// 0:35:40
export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}/>
      <Route path="/main" component={Main}/>
    </BrowserRouter>
  );
}
