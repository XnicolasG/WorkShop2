import React from 'react';
import { Link } from 'react-router-dom';
import { ContInit, Mensaje } from '../style/StyledInicio';


const Inicio = () => {

  return (
  <ContInit>
      <Mensaje>Practica tus conocimientos en la categoría que prefieras.</Mensaje>
      <BotonHtml>
<Link to = "" onClick = {toPage('')}><img src="" alt="" /></Link>
      </BotonHtml>
    
  </ContInit>
  );
};

export default Inicio;
