import React from 'react';
import './App.css';
import SideBar from './components/Sidebar';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <MainSection></MainSection>
    </div>
  );
}

export default App;
