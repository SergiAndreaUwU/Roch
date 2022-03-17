import React, { useState } from "react";
import { Modal, Form, Button, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ModalAdd = ({ show, handleClose, categories }) => {
  const { register, handleSubmit } = useForm();
  const [selectedRadio, setSelectedRadio] = useState("");

  // const refreshPage = () => {
  //   window.location.href = "/catalogo";
  // };

  const onSubmit = (values) => {
    debugger;

    switch (selectedRadio) {
      case "category": {
        const sendData = {
          nombre: values.nombre,
          descripcion: values.descripcion,
          alias: values.alias,
          activo: true, //default active
        };
        //despues de hacer la peticion, pedir el id que se genero para agregar {...sendData,id:res.data.id} a redux

        //de mientras se hara un refresh de la pagina si se contesta un OK
        // refreshPage();
        break;
      }
      case "product": {
        //values.category me servira para insertar dentro de la categoria correspondiente

        const sendData = {
          nombre: values.nombre,
          descripcion: values.descripcion,
          alias: values.alias,
          activo: true, //default active
          precio: values.precio - 1 + 1, //convert to int
        };
        //despues de hacer la peticion, pedir el id que se genero para agregar {...sendData,id:res.data.id} a redux

        //de mientras se hara un refresh de la pagina si se contesta un OK
        // refreshPage();

        break;
      }
      default:
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Añadir categoria o producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div key={`inline-${"radio"}`} className="mb-3">
          <Form.Check
            inline
            label="Añadir categoria"
            name="add"
            type="radio"
            onClick={() => {
              setSelectedRadio("category");
            }}
            id={`radio-category`}
          />
          <Form.Check
            inline
            label="Añadir producto"
            name="add"
            type="radio"
            onClick={() => {
              setSelectedRadio("product");
            }}
            id={`radio-product`}
          />
          {selectedRadio === "product" && (
            <div>
              <Form.Label htmlFor="">
                Selecciona a que Categoria pertenece
              </Form.Label>
              <Form.Select
                aria-label="selecciona Categoria"
                {...register("category", { required: true })}
              >
                <option value="">Selecciona una categoria</option>
                {categories.map((el) => (
                  <option value={el.nombre}>{el.nombre}</option>
                ))}
              </Form.Select>

              <Form.Label htmlFor="">Nombre:</Form.Label>
              <Form.Control
                type="text"
                aria-describedby="nombre producto"
                {...register("nombre", { required: true })}
              />
              <Form.Label htmlFor="">Descripcion:</Form.Label>
              <Form.Control
                as="textarea"
                aria-describedby="descripcion producto"
                {...register("descripcion", { required: true })}
              />
              <Form.Label htmlFor="">Alias:</Form.Label>
              <Form.Control
                type="text"
                aria-describedby="alias producto"
                {...register("alias", { required: true })}
              />
              <Form.Label htmlFor="">Precio unitario:</Form.Label>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  aria-label="Amount (to the nearest dollar)"
                  {...register("precio", { required: true })}
                />
              </InputGroup>
            </div>
          )}
          {selectedRadio === "category" && (
            <div>
              <Form.Label htmlFor="">Nombre de categoria:</Form.Label>
              <Form.Control
                type="text"
                aria-describedby="nombre categoria"
                {...register("nombre", { required: true })}
              />
              <Form.Label htmlFor="">Descripcion:</Form.Label>
              <Form.Control
                as="textarea"
                aria-describedby="descripcion producto"
                {...register("descripcion", { required: true })}
              />
              <Form.Label htmlFor="">Alias:</Form.Label>
              <Form.Control
                type="text"
                aria-describedby="alias producto"
                {...register("alias", { required: true })}
              />
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <div style={{position:"absolute",left:"30px"}} ><span style={{fontSize:"11px",color:"red"}}>{error}</span></div> */}

        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Crear
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAdd;
