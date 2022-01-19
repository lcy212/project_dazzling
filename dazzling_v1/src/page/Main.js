import React from 'react';
import ViewBox from './Main/ViewBox';
import NewBox from './Main/NewBox';
import BestBox from './Main/BestBox';
import InstaBox from './Main/InstaBox';

export default function Main(){
  return (
    <>
      <ViewBox />
      <NewBox />
      <BestBox />
      <InstaBox />
    </>
  )
}
