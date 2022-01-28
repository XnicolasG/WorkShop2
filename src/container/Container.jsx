import React from 'react';
import { ContImg, ContIni, Formato, Inputs, Logo, Titulo } from '../style/StyledCont';

const Container = () => {

  return (
  <ContIni>
      <Formato>
      <ContImg>
          <center>
          <Logo src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643395980/workshop-2/LogoDaily_gt04fz.png" alt=" " />
          </center>       
      </ContImg>
      <Titulo>Iniciar sesión</Titulo>
      <hr />
      <Inputs type="text" placeholder='Ingresa tu usuario'/>
      <Inputs type="password" placeholder='Ingresa tu contraseña' />
      </Formato>
  </ContIni>
  );
};

export default Container;
