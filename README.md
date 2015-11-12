# cf-component-modal

> CloudFlare Modal Component

## Installation

```sh
$ npm install --save cf-component-modal
```

## Usage

```js
import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter,
  ModalActions
} from 'cf-component-modal';

export default class Application extends React.Component {
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
```
