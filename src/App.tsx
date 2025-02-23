// src/App.tsx
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import Navbar from './layout/Navbar';

const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <HomeScreen/>
    </div>
    
  );
};

export default App;
