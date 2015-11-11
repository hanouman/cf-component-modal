import React, {PropTypes} from 'react';
import ReactModal2 from 'react-modal2';
import ReactGateway from 'react-gateway';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Modal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    closeOnEsc: PropTypes.bool,
    closeOnBackdropClick: PropTypes.bool
  };

  static defaultProps = {
    closeOnEsc: true,
    closeOnBackdropClick: true
  };

  render() {
    return (
      <ReactGateway>
        <ReactCSSTransitionGroup
          transitionName='cf-transition-modal'
          transitionAppear={true}
          transitionAppearTimeout={200}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
          {this.props.isOpen && (
            <div className='cf-modal__backdrop-scroller'>
              <div className='cf-modal__backdrop-outer'>
                <ReactModal2
                  ref='modal'
                  key='modal'
                  backdropClassName='cf-modal__backdrop'
                  modalClassName='cf-modal'
                  closeOnEsc={this.props.closeOnEsc}
                  closeOnBackdropClick={this.props.closeOnBackdropClick}
                  onClose={this.props.onRequestClose}>
                  {this.props.children}
                </ReactModal2>
              </div>
            </div>
          )}
        </ReactCSSTransitionGroup>
      </ReactGateway>
    );
  }
}

export default Modal;
