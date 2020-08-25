import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Alert } from 'reactstrap';

const GeneralModal = (props) => {
  const {
    onToggle,
    onApprove,
    modal,
    message,
    title,
    className,
  } = props;

  const onApproveHandler = () => {
    onToggle()
    onApprove()
  }

  return (
    <div>
      <Modal isOpen={modal} fade={false} toggle={onToggle} className={className}>
        <ModalHeader toggle={onToggle}>{title}</ModalHeader>
        <ModalBody>
          <Alert color="light">
            {message}
          </Alert>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={e => onApproveHandler()}>OK</Button>{' '}
          <Button color="secondary" onClick={onToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );

}
   

export default GeneralModal;