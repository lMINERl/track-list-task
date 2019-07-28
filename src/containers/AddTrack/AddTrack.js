import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTrackToList } from '../../store/actions/TrackActions';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTrackToList }, dispatch);
};

const AddTrack = props => {
  // state
  const [trackName, setTrackName] = useState('');
  const [length, setLength] = useState('');
  const [artist, setArtist] = useState('');
  const [trackUrl, setTrackUrl] = useState('');

  // handels
  const handleSubmit = function() {
    const validInputs = trackName && length && artist && trackUrl;

    if (validInputs) {
      props.addTrackToList({
        name: trackName,
        length: length,
        artist: artist,
        trackUrl: trackUrl
      });
      props.history.push('/home');
    }
  };

  // jsx
  return (
    <div className="container">
      <div className="row">
        <h2>Add Track</h2>
        <br />
        <div className="col-12 text-left form-group ">
          <label className="text-left font-weight-bold">Track Name</label>
          <input
            placeholder=""
            value={trackName || ''}
            onChange={e => setTrackName(e.target.value.trim())}
            className="form-control w-25 contact-name"
          />
        </div>
        <div className="col-12 text-left form-group">
          <label className="text-left font-weight-bold">Length</label>
          <input
            placeholder=""
            value={length || ''}
            onChange={e => {
              if (!isNaN(Number(e.target.value.trim()))) {
                setLength(e.target.value);
              }
            }}
            className="form-control w-25 contact-name"
          />
        </div>
        <div className="col-12 form-group text-left">
          <label className="text-left font-weight-bold">Artist</label>
          <input
            placeholder=""
            value={artist || ''}
            onChange={e => {
              setArtist(e.target.value.trim());
            }}
            className="form-control w-25 contact-name"
          />
        </div>
        <div className="col-12 form-group text-left">
          <label className="text-left font-weight-bold">Track Url</label>
          <input
            placeholder=""
            value={trackUrl || ''}
            onChange={e => {
              setTrackUrl(e.target.value.trim());
            }}
            className="form-control w-25 contact-name"
          />
        </div>
        <div className="d-flex justify-content-start">
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="btn btn-lg btn-primary ml-5"
          >
            Submit
          </button>
          <NavLink to="/" className="btn btn-lg btn-success ml-5">
            Back to list
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const AddTrackStore = connect(
  null,
  mapDispatchToProps
)(AddTrack);
export { AddTrackStore, AddTrack };
