import React from 'react';
import './App.css';
import { Header } from './components/Header';
import Login from './components/Login';
import ListNews from './components/ListNews';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Detail from './components/Detail';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

export const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <Router>
          <Route path='/signin' component={Login} />
          <Route exact path='/news' component={ListNews} />
          <Route path='/detail/:id' component={Detail} />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
