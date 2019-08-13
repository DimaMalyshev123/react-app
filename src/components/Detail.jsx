import React from 'react';
import { getNews } from '../api/getContents';
import { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';

export const Detail = props => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    getNews([props.match.params.id]).then(result => {
      setDetail(result);
    });
  }, []);

  return (
    <div className='detail'>
      <ReactJson src={detail} />
    </div>
  );
};
