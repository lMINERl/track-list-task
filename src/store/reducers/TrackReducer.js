import * as actionTypes from '../actions/TrackActions';
// import Track from '../../models/TrackModule';

const data = [];

const initialState = {
  trackList: data,
  filteredList: [],
  myTracks: []
};

export default function cartReducer(state = initialState, action = {}) {
  let newTrackList = [...state.trackList];
  let newFilteredList = [...newTrackList];
  let newMyTracks = [...state.myTracks];
  switch (action.type) {
    case actionTypes.GET_ALL_TRACKS:
      {
        const items = action.payload;
        newTrackList = [...items];
        newFilteredList = [...items];
      }
      break;
    case actionTypes.GET_TRACKS_BY_NAME:
      {
        // accept only alphanumeric variables and ignoring special characters
        const name = action.payload.toLowerCase().replace(/[^a-z0-9]/gi, '');
        newFilteredList = newTrackList.filter(
          c => c.name.toLowerCase().search(name) !== -1
        );
      }
      break;
    case actionTypes.DELETE_TRACK_BY_ID:
      {
        const id = action.payload;
        if (id !== null && id !== undefined) {
          const index = newTrackList.findIndex(t => t.id === id);
          if (index !== -1) {
            newTrackList = [].concat(
              newTrackList.slice(0, index),
              newTrackList.slice(index + 1, newTrackList.length)
            );
            newFilteredList = [...newTrackList];
          }
        }
      }
      break;
    case actionTypes.ADD_TRACK:
      {
        const trackId = Date.now();
        const newTrack = { ...action.payload, id: trackId };

        newTrackList.push(newTrack);
        newFilteredList = [...newTrackList];
      }

      break;
    default:
      console.error(
        `unknown action type please recheck your action types from Entity Tracks actions`
      );
      break;
  }
  return {
    ...state,
    trackList: newTrackList,
    filteredList: newFilteredList,
    myTracks: newMyTracks
  };
}
