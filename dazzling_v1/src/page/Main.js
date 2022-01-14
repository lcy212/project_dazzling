import React from 'react';
import ViewBox from '../component/ViewBox';
import NewBox from '../component/NewBox';
import BestBox from '../component/BestBox';
import InstaBox from '../component/InstaBox';

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
