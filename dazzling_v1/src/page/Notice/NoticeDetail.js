import React from 'react';
import {useParams} from 'react-router-dom';

export default function NoticeDetail(){
  const {linkTo} = useParams();
  return (
    <div>{linkTo} 상세페이지</div>
  )
}