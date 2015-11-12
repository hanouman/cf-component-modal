import React, {PropTypes} from 'react';

function ModalActions(props) {
  return <div className='cf-modal__actions'>{props.children}</div>;
}

module.exports = ModalActions;
