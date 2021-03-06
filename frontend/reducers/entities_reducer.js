import { combineReducers } from 'redux';
import playlists from './playlists_reducer';
import tracks from './tracks_reducer';
import albums from './albums_reducer';
import genres from './genres_reducer';
import artists from './artists_reducer';
import users from './users_reducer';

const EntitiesReducer = combineReducers({
  playlists,
  tracks,
  albums,
  genres,
  artists,
  users
});

export default EntitiesReducer;
