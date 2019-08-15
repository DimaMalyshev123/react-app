import { setListNews, isLoading } from '../actions/index';

export const getNews = async res => {
  let news = [];

  for (let i = 0; i < res.length; i++) {
    let response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${res[i]}.json?print=pretty`
    );
    if (response.ok) {
      let result = await response.json();
      news.push(result);
    }
  }

  return news;
};

export const getContent = page => {
  return async dispatch => {
    dispatch(isLoading(true));

    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => res.json())
      .then(res => {
        let id = [];
        for (let i = (page - 1) * 10; i < page * 10; i++) {
          id.push(res[i]);
        }
        return id;
      })
      .then(id => {
        let news = [];
        getNews(id).then(result => {
          result.map(res => {
            return news.push(res);
          });
          console.log(news);
          dispatch(setListNews(news));
          dispatch(isLoading(false));
        });
        return news;
      });
  };
};
