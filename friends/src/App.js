import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from '../src/components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/Protected';



function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={Login} />
        <PrivateRoute path="/friends" component={Friends} />
      </div>
    </Router>
  );
}

export default App;
