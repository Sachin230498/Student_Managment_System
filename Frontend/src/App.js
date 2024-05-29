import React from 'react';
import './App.css';
import Routers from './Routes/Routers';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <Router>
        <Routers />
      </Router>
    </div>
  );
}

export default App;
