import { isAuth } from '../actions/index';

export const auth = dataUser => {
  return dispatch => {
    if (dataUser.login.trim().length > 3 && dataUser.password.length > 3) {
      fetch('http://localhost:8000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: dataUser.login.trim(),
          password: dataUser.password
        })
      })
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(res => {
          console.log(res);
          if (res.token) {
            dispatch(isAuth(res.token));
          } else alert(res.message);
        });
    } else alert('Too short login/password');
  };
};
// export const getContent = page => {
//     return async dispatch => {
//       dispatch(isLoading(true));

//       fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
//         .then(res => res.json())
//         .then(res => {
//           let id = [];
//           for (let i = (page - 1) * 10; i < page * 10; i++) {
//             id.push(res[i]);
//           }
//           return id;
//         })
//         .then(id => {
//           let news = [];
//           getNews(id).then(result => {
//             result.map(res => {
//               return news.push(res);
//             });
//             console.log(news);
//             dispatch(setListNews(news));
//             dispatch(isLoading(false));
//           });
//           return news;
//         });
//     };
//   };
