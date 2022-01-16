import React from 'react';
import HeadBox from './component/HeadBox';
import RouterPage from './Router/RouterPage';
import FootBox from './component/FootBox';
import UpBox from './component/UpBox';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeadBox />
      <RouterPage />
      <FootBox />
      <UpBox />
    </div>
  );
}

export default App;
