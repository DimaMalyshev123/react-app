import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import SearchPage from './SearchPage';
import { getContent } from '../api/getContents';
import { NewsRender } from './NewsRender';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ListNews = props => {
  const callBackNews = useCallback(() => {
    return props.listNews;
  }, [props.isLoading]);

  const renderList = () => {
    console.log(props.currentPage);
    props.getContent(props.currentPage);
  };

  return (
    <div>
      {props.isAuth ? null : <Redirect to='/signin' />}
      <p>Current page value: {props.currentPage} </p>
      <SearchPage onClick={renderList} disabled={props.isLoading} />
      <NewsRender news={callBackNews()} />
      <p>Page: {props.currentPage}</p>
      <p>Length: {props.listNews.length}</p>
    </div>
  );
};

ListNews.propTypes = {
  page: PropTypes.number,
  news: PropTypes.array,
  disableBtn: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage,
    listNews: state.listNews,
    isLoading: state.isLoading,
    isAuth: state.isAuth
  };
};

export default connect(
  mapStateToProps,
  { getContent }
)(ListNews);
