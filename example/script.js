import React from 'react';
import {render} from 'react-dom';
import Modal from '../src/index';
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
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleRequestClose.bind(this)}>
          <h1>Hello from Modal</h1>
          <p>Isn't this a nice modal?</p>
        </Modal>
      </div>
    );
  }
}

var root = document.getElementById('root');
ReactModal2.setApplicationElement(root);
render(<Application/>, root);
