import React from "react";
import { Modal, Spinner } from "react-bootstrap";

function ModalLoad({ show }) {
  return (
    <>
      <Modal
        show={show}
        // onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        id="modal-load"
      >
        <Modal.Body>
          <Spinner animation="border" role="status" variant="warning" style={{width:"90px",height:"90px"}}>
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLoad;
