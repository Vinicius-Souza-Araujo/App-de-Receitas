import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";


import EscolhaInicial from "../telas/EscolhaInicial";
import Usuario from "../telas/Usuario";
import Chefe from "../telas/Chefe";
const Rotas = {

  

  EscolhaInicial: {
    nome: "EscolhaInicial",
    screen: EscolhaInicial,
  },

  Usuario: {
    nome: "Usuario",
    screen: Usuario,
  }, 
  
  Chefe: {
    nome: "Chefe",
    screen: Chefe,
  },

  
  
};
// Criar as Rotas
const Navegacao = createSwitchNavigator(Rotas);
// Passar para o App
export default createAppContainer(Navegacao);