import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from '../page/Main';
import Company from '../page/Company';
import Product from '../page/Product';
import Notice from '../page/Notice';
import NoticeDetail from '../page/Notice/NoticeDetail';
import PageError from '../page/PageError';

export default function RouterPage(){
  return (
    <Routes>
      <Route path="" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/Company" element={<Company />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Notice" element={<Notice />}>
        <Route path=":linkTo" element={<NoticeDetail />} />
      </Route>
      <Route path="/*" element={<PageError />} />
    </Routes>
  )
}