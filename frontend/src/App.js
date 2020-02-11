import React from 'react';
import { Router } from './pages/Router';
import { SocketProvider } from './socket';

function App() {
  return (
    <SocketProvider url="http://localhost:3001">
      <Router />
    </SocketProvider>
  );
}

export default App;
