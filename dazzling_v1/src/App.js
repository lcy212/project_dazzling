import React from 'react';
import HeadBox from './page/Base/HeadBox';
import RouterPage from './Router/RouterPage';
import FootBox from './page/Base/FootBox';
import UpBox from './page/Base/UpBox';
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
