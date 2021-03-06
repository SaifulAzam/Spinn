import GenericIndexItem from './GenericIndexItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlayButton from './PlaylistItemOverlay';

const mapStateToProps = (state, ownProps) => {
  return {
    itemName: ownProps.item.name,
    author: ownProps.item.author,
    loading: state.ui.loading.global,
    imageUrl: ownProps.item.imageUrl,
    id: ownProps.item.id,
    loadingClass: 'playlist-loading',
    imageClass: 'playlist-image',
    handleClick: () => ownProps.history.push(`/collection/playlists/${ownProps.item.id}`),
    PlayButton
  };
};



export default withRouter(connect(
  mapStateToProps
)(GenericIndexItem));
