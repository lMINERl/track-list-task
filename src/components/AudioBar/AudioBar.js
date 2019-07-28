import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTrackById } from '../../store/actions/TrackActions';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deleteTrackById }, dispatch);
};

const AudioBar = props => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="card col-9 mt-5">
      <div className="row card-header" id="headingOne">
        <h5 className="mb-0 col-4">
          <button
            className={'btn btn-link btn-lg' + (isShow ? ` ` : ' collapsed')}
            onClick={() => setIsShow(!isShow)}
          >
            {props.data.name}
          </button>
        </h5>
        <audio controls="controls" className="col-6">
          <source src={props.data.url} type="audio/mpeg" />
        </audio>
        <div className="col-2 d-flex justify-content-end">
          <button
            onClick={() => props.deleteTrackById(props.data.id)}
            type="button"
            className="btn btn-group-sm btn-danger  button__small"
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>

      <div
        id="collapseOne"
        className={'card-details collapse' + (isShow ? ` show` : ``)}
      >
        <div className="card-body">
          Length: {props.data.length}
          <hr />
          Artist: {props.data.artist}
        </div>
      </div>
    </div>
  );
};

const AudioBarStore = connect(
  null,
  mapDispatchToProps
)(AudioBar);

export { AudioBarStore, AudioBar };
