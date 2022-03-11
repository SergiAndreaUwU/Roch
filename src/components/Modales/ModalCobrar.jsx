import { Button,Modal } from "react-bootstrap";

function ModalCobrar({show,handleClose,reduxResetShopList,callbackSetPaymentInfo,paymentInfo,updateAlreadyPayed}) {
let inpPayment="0"
    const handleClick=()=>{
        const payedWith=inpPayment-1+1
        debugger
        if(payedWith<paymentInfo.totalPrice){

            return
        }
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
            <input type="number" onChange={(e)=>{inpPayment=e.target.value}}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleClick}>$ COBRAR</Button>
          </Modal.Footer>
        </Modal>
    );
  }

  export default ModalCobrar