import React, {PropTypes} from 'react';

function ModalHeader(props) {
  return <header className='cf-modal__header'>{props.children}</header>;
}

module.exports = ModalHeader;
