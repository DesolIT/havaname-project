import React, {useState} from "react";
import Button from '/src/lib/Button'
import styled from "styled-components";
import { Cell, Grid } from "styled-css-grid";
import router from "next/router";

const CustomInput = styled.input((props) => {
    return {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#ced4da",
      borderRadius: ".3rem",
      outline: "none",
      boxShadow: "none",
      fontSize: "1rem",
      fontFamily: "Arial",
      marginTop: "2px",
      position: "relative",
      marginBottom: "0px",
      boxSizing: "border-box",
      padding: ".5rem 1rem",
      fontSize: "1.1rem",
      lineHeight: "1.5",
      borderRadius: ".3rem",
      width: "100%",
    };
  });

  const CustomBox = styled.textarea((props) => {
    return {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#ced4da",
      borderRadius: ".3rem",
      outline: "none",
      boxShadow: "none",
      fontSize: "1rem",
      fontFamily: "Arial",
      marginTop: "2px",
      position: "relative",
      marginBottom: "0px",
      boxSizing: "border-box",
      padding: ".5rem 1rem",
      fontSize: "1.1rem",
      lineHeight: "1.5",
      borderRadius: ".3rem",
      width: "100%",
      height: "150px ",
    };
  });

const FormContact = ()=>{
    let sacarStorage;
    const [formValue, setFormValue] = useState({
        nombre: '',
        email: '',
        asunto:'',
        contenido:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
      };

      const enviarDatos = (e) => {
        e.preventDefault();
        let datos = JSON.parse(localStorage.getItem("contenido")) || [];
        let result = [...datos];

        result.push(formValue);
        
        localStorage.setItem("contenido", JSON.stringify(result));
        sacarStorage = JSON.parse(localStorage.getItem("contenido"));
        //  router.push("/contacto/contactanos");
        router.push("/");
        
    }
    const { nombre, email, asunto, contenido} = formValue;
    return(
        <>
        <form onSubmit={enviarDatos}>
        <Grid columns={1}>
                <Cell width={1}>
                    <label name='Nombre'>
                        Nombre:
                    </label>
                <CustomInput
                    type="text"
                    name="nombre"
                    placeholder="Jhon Doe"
                    onChange={handleChange}
                    value={nombre}
                    required
                />
                    <label name='email'>
                        Correo Electronico:
                    </label>
                <CustomInput
                    type="email"
                    name="email"
                    placeholder="jhonDoe@example.com"
                    onChange={handleChange}
                    value={email}
                    required
                />
                    <label name='asunto'>
                        Asunto:
                    </label>
                <CustomInput
                    type="text"
                    name="asunto"
                    placeholder="Asunto..."
                    onChange={handleChange}
                    value={asunto}
                    required
                />
                    <label name='contenido'>
                        Contenido:
                    </label>
               <CustomBox
                    name="contenido"
                    placeholder="Teclee su texto aqui..."
                    onChange={handleChange}
                    value={contenido}
                    required
               >
                </CustomBox>
                
                        <Button type='submit'>Enviar</Button>
                </Cell>
                    
            </Grid>
        </form>
        </>
    )
}

export default FormContact
                    