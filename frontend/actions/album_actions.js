import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUMS = 'REMOVE_ALBUMS';

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS, albums
});

export const receiveAlbum = data => ({
  type: RECEIVE_ALBUM, data
});

export const removeAlbums = () => ({
  type: REMOVE_ALBUMS
});

export const fetchAlbums = filter => dispatch => (
  AlbumApiUtil.fetchAlbums(filter).then(albums =>
    dispatch(receiveAlbums(albums))
  )
);

export const fetchAlbum = id => dispatch => (
  AlbumApiUtil.fetchAlbum(id).then(album =>
    dispatch(receiveAlbum(album))
  )
);