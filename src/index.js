import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import About from './About'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
        
        <Route path='/' exact component={App} />
        <Route path="/about" exact component={About} />
        <Redirect from='/' to='/about' exact />
      </Switch>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
