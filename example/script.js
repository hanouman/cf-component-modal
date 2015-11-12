import React from 'react';
import {render} from 'react-dom';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter,
  ModalActions
} from '../src/index';
import ReactModal2 from 'react-modal2';

class Application extends React.Component {
  constructor() {
    super();
  }

  state = {
    isModalOpen: false
  };

  handleRequestOpen() {
    this.setState({ isModalOpen: true });
  }

  handleRequestClose() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div>
        <h1>CloudFlare Modal Component Example</h1>
        <button onClick={this.handleRequestOpen.bind(this)}>Open Modal</button>
        <Modal
          closeOnEsc={false}
          closeOnBackdropClick={false}
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleRequestClose.bind(this)}>
          <ModalHeader>
            <ModalTitle>Hello from Modal</ModalTitle>
            <ModalClose onClick={this.handleRequestClose.bind(this)}/>
          </ModalHeader>
          <ModalBody>
            <p>Isn't this a nice modal?</p>
          </ModalBody>
          <ModalFooter>
            <ModalActions>
              <button onClick={this.handleRequestClose.bind(this)}>Close Modal</button>
            </ModalActions>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

var root = document.getElementById('root');
ReactModal2.setApplicationElement(root);
render(<Application/>, root);
