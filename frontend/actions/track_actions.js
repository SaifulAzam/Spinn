import * as TrackApiUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS, tracks
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK, track
});

export const fetchTracks = filters => dispatch => (
  TrackApiUtil.fetchTracks(filters).then(tracks =>
    dispatch(receiveTracks(tracks))
  )
);

export const fetchTrack = id => dispatch => (
  TrackApiUtil.fetchTrack(id).then(track =>
    dispatch(receiveTrack(track))
  )
);
