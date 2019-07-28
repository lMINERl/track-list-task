import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTrackByName } from '../../store/actions/TrackActions';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getTrackByName }, dispatch);
};

const Search = props => {
  const [searchText, setSearchText] = useState('');

  // component handle functions
  const searchHandleChange = value => {
    setSearchText(value);
    props.getTrackByName(value);
  };

  return (
    <input
      type="text"
      placeholder="Search Contacts"
      onChange={event => searchHandleChange(event.target.value)}
      className="search-input text-center mr-auto ml-auto"
      value={searchText || ''}
    />
  );
};

const SearchStore = connect(
  null,
  mapDispatchToProps
)(Search);

export { SearchStore, Search };
