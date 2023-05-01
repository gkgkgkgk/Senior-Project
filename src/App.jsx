import React from 'react';
import Box from './components/renderer/Box';
import Display from './components/renderer/Display';
import "./App.css"
import Paper from './components/text/Paper'
import Header from './components/text/Header'

const App = () => {
  return (
    <div className="content">
      <Header></Header>
      <Display/>
      <Paper></Paper>
    </div>
  );
};

export default App;