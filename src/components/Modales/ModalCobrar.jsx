import { Button,Modal,Form } from "react-bootstrap";
import { useState } from "react";

function ModalCobrar({show,handleClose,reduxResetShopList,callbackSetPaymentInfo,paymentInfo,updateAlreadyPayed}) {
  const [error,setError]=useState("")
let inpPayment="0"
    const handleClick=()=>{
        const payedWith=inpPayment-1+1
        debugger
        if(payedWith<paymentInfo.totalPrice){
            setError("Monto recibido no cubre monto a pagar")
            return
        }
        setError("")
        updateAlreadyPayed(true)
        callbackSetPaymentInfo({payedWith})
        //POST TO MONGO TO SAVE THIS IN HISTORIAL COLLECTION
        //WILL SEND shopList AND paymentInfo
        handleClose()
    }

    return (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Ingrese monto recibido</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
                type="number"
                name="modal-pay-input"
                onChange={(e)=>{inpPayment=e.target.value}}
                isInvalid={error || null}
              />
          </Modal.Body>
          <Modal.Footer>
          <div style={{position:"absolute",left:"30px"}} ><span style={{fontSize:"11px",color:"red"}}>{error}</span></div>

            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleClick}>$ COBRAR</Button>
          </Modal.Footer>
        </Modal>
    );
  }

  export default ModalCobrar