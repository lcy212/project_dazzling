import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from '../page/Main';

export default function RouterPage(){
  return (
    <Routes>
      <Route path="" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  )
}