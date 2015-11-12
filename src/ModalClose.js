import React, {PropTypes} from 'react';

function ModalClose(props) {
  return <span className='cf-modal__close' onClick={props.onClick}></span>;
}

ModalClose.propTypes = {
  onClick: PropTypes.func.isRequired
};

module.exports = ModalClose;
