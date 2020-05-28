import React, { Component } from 'react';
import '../src/assets/css/main.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <button className="btn">Sign Up</button>
    </div>
  );
}

export default App;
