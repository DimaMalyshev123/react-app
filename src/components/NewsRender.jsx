import React from 'react';
import { NewsBlock } from './NewsBlock';

export const NewsRender = props => {
  return (
    <div>
      {props.news.map((item, i) => {
        if (i === 3) return <NewsBlock news={undefined} />;
        return <NewsBlock news={item} />;
      })}
    </div>
  );
};
