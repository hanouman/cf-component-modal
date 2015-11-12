import React, {PropTypes} from 'react';

function ModalTitle(props) {
  return <h4 className='cf-modal__title'>{props.children}</h4>;
}

module.exports = ModalTitle;
