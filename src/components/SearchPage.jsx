import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const SearchPage = props => {
  let inputPage;

  useEffect(() => {
    props.onClick();
  }, [props.currentPage]);

  const handlePageChange = () => {
    if (inputPage > 0 && inputPage < 50) {
      props.dispatch({
        type: 'SET_CURRENT_PAGE',
        payload: inputPage
      });
    } else {
      alert('Wrong search range. Select number 1 - 50');
    }
  };

  const updateInput = e => {
    inputPage = +e.target.value;
  };

  return (
    <div>
      <input
        className='inputPage'
        placeholder='Choose page'
        onChange={updateInput}
        value={inputPage}
      />
      <button
        className='button'
        onClick={() => handlePageChange()}
        disabled={props.disabled}
      >
        Choose page
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentPage: state.currentPage };
};

export default connect(mapStateToProps)(SearchPage);
