import React from 'react';
import './App.css';
import { Header } from './components/Header';
import ListNews from './components/ListNews';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Detail } from './components/Detail';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

export const store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <Router>
          <Route exact path='/' component={ListNews} />
          <Route path='/detail/:id' component={Detail} />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
