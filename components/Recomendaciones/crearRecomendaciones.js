import React, {useState} from "react";
import Button from '/src/lib/Button'
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { Cell, Grid } from "styled-css-grid";

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

const CrearRecomendaciones = ()=>{
    let sacarStorage;
    const [formValue, setFormValue] = useState({
        autor: '',
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

      const enviarRecomendacion = (e) => {
        e.preventDefault();
        let datos = JSON.parse(localStorage.getItem("recomendaciones")) || [];
        let result = [...datos];

        result.push(formValue);
        
        localStorage.setItem("recomendaciones", JSON.stringify(result));
        sacarStorage = JSON.parse(localStorage.getItem("recomendaciones"));
         router.push("/testimonials/testimonials");
        
    }
    const { autor, contenido} = formValue;
    return(
        <>
        <h1>Crear Recomendacion</h1>
        <form onSubmit={enviarRecomendacion}>
        <Grid columns={1}>
                <Cell width={1}>
                <CustomInput
                    type="text"
                    name="autor"
                    placeholder="Jhon Doe"
                    onChange={handleChange}
                    value={autor}
                    required
                />
               <CustomBox
                    name="contenido"
                    placeholder="Teclee su recomendacion aqui..."
                    onChange={handleChange}
                    value={contenido}
                    required
               >
                </CustomBox>
                
                        <Button type='submit'>Crear</Button>
                </Cell>
                    
            </Grid>
        </form>
        </>
    )
}

export default CrearRecomendaciones
                    