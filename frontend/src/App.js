import React from 'react';
import { Router } from './pages/Router';
import { SocketProvider } from './socket';
import { TopBar } from './TopBar';

function App() {
  return (
    <SocketProvider url="http://localhost:3001">
      <TopBar />
      <Router />
    </SocketProvider>
  );
}

export default App;
