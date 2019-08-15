import React from 'react';
import { getNews } from '../api/getContents';
import { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Detail = props => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    getNews([props.match.params.id]).then(result => {
      setDetail(result);
    });
  }, []);

  return (
    <div className='detail'>
      {props.isAuth ? null : <Redirect to='/signin' />}
      <ReactJson src={detail} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.isAuth
  };
};

export default connect(mapStateToProps)(Detail);
