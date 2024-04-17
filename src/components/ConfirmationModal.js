import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ConfirmationModal = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Confirmation</ModalHeader>
      <ModalBody>
        Your profile has been successfully activated.
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>OK</Button>
      </ModalFooter>
    </Modal>
  );
}

export default ConfirmationModal;
