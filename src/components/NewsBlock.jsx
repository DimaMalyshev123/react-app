import React from 'react';

export const NewsBlock = props => {
  const time = () => {
    let time = Date.now() / 1000 - props.news.time;
    let result =
      time / 3600 >= 1
        ? `${Math.round(time / 3600)} hours ago`
        : `${Math.round(time / 60)} minutes ago`;
    return result;
  };

  const detailInfo = news => {
    const detail = JSON.stringify(news);
    alert(detail);
  };

  return (
    <div className='newsList listNews'>
      <a className='titleUrl' href={props.news.url}>
        {props.news.title}
      </a>
      <br />
      <p className='newsInfo'>
        by <span className='nameBy'>{props.news.by} </span>|{time()} |
        <button className='detailBtn'>
          <a className='linkDetail' href={`/detail/${props.news.id}`}>
            detail
          </a>
        </button>
      </p>
    </div>
  );
};

NewsBlock.defaultProps = {
  news: {
    url: 'Url not found',
    title: 'Title not found',
    by: 'By not found'
  }
};
