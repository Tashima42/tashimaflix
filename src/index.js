import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import Home from './pages/Home/Home';
import Pagina404 from './pages/404/404'
import CadastroVideo from './pages/Cadastro/Video/CadastroVideo'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={Home} exact/>
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
