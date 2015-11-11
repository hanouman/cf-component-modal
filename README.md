# cf-component-modal

> CloudFlare Modal Component

## Installation

```sh
$ npm install --save cf-component-modal
```

## Usage

```js
import React from 'react';
import Modal from 'cf-component-modal';

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
          <h1>Hello from Modal</h1>
          <p>Isn't this a nice modal?</p>
        </Modal>
      </div>
    );
  }
}
```
