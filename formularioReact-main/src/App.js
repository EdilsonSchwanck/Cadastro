import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "fontsource-roboto";
import { Container, Typography } from "@material-ui/core";
import {ReactComponent as LogoipsumSVG} from "../../formularioReact/src/assets/img/logoipsum.svg";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

//teste

import { validarCPF, validarSenha, validarNome } from "./models/cadastro";
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
          <div className='logo'>
            <LogoipsumSVG className="logo"/>
          </div>
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha, nome: validarNome}}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
