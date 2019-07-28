import { TrackAPI } from '../../api/TrackApi';

// actions const
export const GET_ALL_TRACKS = 'GET_ALL_TRACKS';
export const GET_TRACKS_BY_NAME = 'GET_TRACKS_BY_NAME';
export const DELETE_TRACK_BY_ID = 'DELETE_TRACK_BY_ID';
export const ADD_TRACK = 'ADD_TRACK';
export const ERROR = 'ERROR';

// Dispatchers
export const getAllTracksDispatch = () => {
  return dispatch =>
    TrackAPI.getAll()
      .then(v => {
        const items = v.data.tracks;

        const newItems = items.map((i, c) => {
          i.id = Date.now().toString() + '' + c; // assign random ids
          return i;
        });

        dispatch(getAllTracks(newItems));
      })
      .catch(console.error);
};

// Actions
export const getAllTracks = response => {
  return {
    type: GET_ALL_TRACKS,
    payload: response
  };
};
export const getTrackByName = name => {
  return {
    type: GET_TRACKS_BY_NAME,
    payload: name
  };
};
export const deleteTrackById = id => {
  return {
    type: DELETE_TRACK_BY_ID,
    payload: id
  };
};

export const addTrackToList = data => {
  return {
    type: ADD_TRACK,
    payload: data
  };
};
