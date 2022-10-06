import React from 'react'
import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator';
import User from './components/User'

function App() {
  return (
    <div>
      <User />
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
