import {expect} from 'chai';
import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Modal from '../src/index';

describe('Modal', function() {
  beforeEach(function() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root);
  });

  afterEach(function() {
    unmountComponentAtNode(this.root);
  });

  it('should hide the modal when `isOpen` is `false`', function() {
    let dom = <Modal isOpen={false} onRequestClose={function() {}}/>;
    let instance = render(dom, this.root);

    expect(instance.refs.modal).to.be.undefined;
  });

  it('should render the modal when `isOpen` is `true`', function() {
    let dom = <Modal isOpen={true} onRequestClose={function() {}}/>;
    let instance = render(dom, this.root);

    expect(instance.refs.modal).not.to.be.undefined;
  });
});
