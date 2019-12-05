import React from 'react';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import MainSection from './components/main-section/MainSection';

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <MainSection></MainSection>
    </div>
  );
}

export default App;
