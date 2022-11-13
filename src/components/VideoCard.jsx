import React from 'react';
import {format, register} from 'timeago.js'
import koLocale from 'timeago.js/lib/lang/ko'
import { formatAgo } from '../util/data';
import { Link, useNavigate, useParams } from 'react-router-dom';

register('ko', koLocale);

export default function VideoCard({ video }) {
  
  const {title, thumbnails,channelTitle,publishedAt} = video.snippet;
  const navigate = useNavigate();

  return ( 
  <li onClick={()=>{navigate(`videos/watch/${video.id}`, {state: {video}}); }}>
    <img className='w-full' src={thumbnails.medium.url} alt ={title}></img>
    <div>
      <p className='font-semibold my-2 line0'> {title}</p>
      <p className='text-sm opacity-80'>{channelTitle}</p>
      <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>      
    </div>
  </li>
  )
}
 