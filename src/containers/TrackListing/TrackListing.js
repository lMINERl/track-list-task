import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import {
  getAllTracksDispatch,
  getTrackByName
} from '../../store/actions/TrackActions';

import Error from './Error';
import Search from '../../components/Search';
import AudioBar from '../../components/AudioBar';

// container actions
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getAllTracksDispatch, getTrackByName }, dispatch);
};

// container state
const mapStateToProps = state => {
  return {
    trackList: state.track.filteredList
  };
};

// component state , logic and return jsx
const TrackListing = props => {
  // component state

  // side Effects calling dispatcher
  const getAllTracks = props.getAllTracksDispatch;
  const trackList = props.trackList;
  useEffect(() => {
    // bad pratice to do conditions here
    if (!trackList || !trackList.length) {
      getAllTracks();
    }
  }, [getAllTracks, trackList]);

  // early returns
  if (!props.trackList) {
    // if no tracklist from mapped props
    return <Error />;
  }

  // component jsx
  // listing
  const AudioBars = props.trackList.length ? (
    props.trackList.map((t, i) => <AudioBar key={t.id} data={t} />)
  ) : (
    <Error />
  );
  // jsx
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>My Track List</h1>
        </div>
        <div className="col-12 text-center">
          <Search />
        </div>
        <div className="col-10  text-right">
          <NavLink
            to="/addTrack"
            className="btn btn-success btn-group-lg btn-lg"
          >
            <i className="fa fa-plus"></i>
            Add Track
          </NavLink>
        </div>
      </div>

      <div className="row d-flex justify-content-center" id="accordion">
        {AudioBars}
      </div>
    </div>
  );
};

const TrackListingStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackListing);
export { TrackListingStore, TrackListing };
