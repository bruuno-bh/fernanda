import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Bio from './components/Bio';
import OndeAssistir from './components/OndeAssistir';
import Timeline from './components/Timeline';
import Engage from './components/Engage';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <Bio />
      <Timeline />
      <OndeAssistir />
      <Engage />
    </div>
  );
}

export default App;