import React from 'react';
import UserPlaylistModal from '../modals/UserPlaylistModal';

//TODO: Put UserPlaylistModal in higher component so it isn't on the Dom for every track.

class GenericDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: props.clicked,
      isModalOpen: false,
     };

    this.name = props.name;
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.clicked != this.state.clicked) {
      this.setState({ clicked: !this.state.clicked});
    }
  }

  handleCloseModal() {
    this.setState({ isModalOpen: false });
  }

  handleOpenModal() {
    this.setState({ isModalOpen: true });
  }

  render() {
    const className = this.state.clicked ? 'visible' : 'hidden';
    const { isModalOpen } = this.state;

    return(
      <div className={`dropdown-container-${className}`}>
        <ul className='dropdown-list'>
          { this.props.listItems.map((Item, idx) => (
            <Item key={idx} { ...this.props} handleOpenModal={this.handleOpenModal}/>
            ))
          }
        </ul>
        <UserPlaylistModal
          isOpen={isModalOpen}
          handleCloseModal={this.handleCloseModal}
          { ...this.props}
          />
      </div>
    );
  }
}

export default GenericDropDown;
