import React, { useState } from "react";
import styles from "./login.module.sass";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "../../images/logo.jpg";
import ModalLoad from "../utils/sharedComponents/modalLoad";

import { useForm } from "react-hook-form";

function Login({ callbackUserHasLogged }) {
  const { register, handleSubmit } = useForm();
  const [showModalLoad, setShowModalLoad] = useState(false);

  const onSubmit = async (values) => {
    //call api to receive token with values.user & values.password

    setShowModalLoad(true);
    const token = await mockLoggin();
    setShowModalLoad(false);
    localStorage.setItem("token", token);
    callbackUserHasLogged();
  };

  const mockLoggin = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("token123");
      }, [1000]);
    });
  };

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      <ModalLoad show={showModalLoad} />
      <div
        style={{
          margin: "auto",
          width: "550px",
          height: "730px",
          border: "1px solid black",
          display: "flex",
          flexFlow: "column nowrap",
          padding: "25px",
          boxShadow: "10px 10px 10px grey",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            flexBasis: "70%",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${Logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "500px",
            position: "relative",
          }}
        ></div>

        <div
          style={{
            flexBasis: "30%",
            width: "100%",
            height: "100%",
          }}
          id="logging-form"
        >
          <Form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexFlow: "column nowrap" }}
            
          >
            <Form.Group className="mb-3">
              <Form.Label>Ingresa nombre de usuario</Form.Label>
              <Form.Control
                placeholder="Usuario"
                {...register("user", { required: false })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ingresa contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                {...register("password", { required: false })}
              />
            </Form.Group>
            <div style={{ margin: "auto" }}>
              <Button
                type="submit"
                style={{ margin: "auto", color: "white" }}
                variant="warning"
              >
                Iniciar sesion
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
