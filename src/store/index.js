import { combineReducers } from 'redux';
import TrackReducer from './reducers/TrackReducer';

// compining reducers into 1 global state
export default combineReducers({
  track: TrackReducer
});
