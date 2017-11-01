import merge from 'lodash/merge';
import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLISTS,
  DELETE_PLAYLIST
} from '../actions/playlist_actions'

const PlaylistReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      newState = merge({}, state, { [action.data.playlist.id]: action.data.playlist });
      return newState;
    case REMOVE_PLAYLISTS:
      return {};
    default:
      return state;
  }
};

export default PlaylistReducer;
