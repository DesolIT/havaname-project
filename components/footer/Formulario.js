import React,{useState} from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
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
  const Boton = styled.button`
  font-size:1em;
  margin:1em;
  padding:0.25em 1em;
  border-radius:3px;

  color:${props=>props.theme.main};
  border: 2px solid ${props=>props.theme.main};
`;
    Boton.defaultProps={
        theme:{
        main:'palevioletred'
     }
    }

    const theme={
        main:'mediumseagreen'
    }

  const Formulario = ()=>{
    const [formValue, setFormValue] = useState({
        correo: ''
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
        // let datos = JSON.parse(localStorage.getItem("newArreglo2")) || [];
        // let result = [...datos];
    
        // if (id) {
        //   result = datos.map((el) => {
        //     if (el.identidad === id) {
        //       return formValue;
        //     }
        //     return el;
        //   });
        // } else {
        //   result.push(formValue);
        // }
        console.log(`el correo ${correo} ha sido enviado para suscribirse`);
    }

    const { correo} = formValue;
    return(
        <form onSubmit={enviarDatos}>
            <Grid columns={2}>
                <Cell width={1}>
                <CustomInput
                type="email"
                name="correo"
                placeholder="Correo Electronico"
                onChange={handleChange}
                value={correo}
                required
                />
                    <ThemeProvider theme={theme}>
                        <Boton>Suscribirse</Boton>
                    </ThemeProvider>
                </Cell>
            </Grid>
        </form>
        )
}

export default Formulario