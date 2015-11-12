import React, {PropTypes} from 'react';

function ModalFooter(props) {
  let className = 'cf-modal__footer';

  if (props.simple) {
    className += ' cf-modal__footer--simple';
  }

  return <div className={className}>{props.children}</div>;
}

ModalFooter.propTypes = {
  simple: PropTypes.bool
};

ModalFooter.defaultProps = {
  simple: false
};

module.exports = ModalFooter;
