import React from 'react';
import { Link } from 'react-router-dom';
import { ContInit, Mensaje } from '../style/StyledInicio';


const Inicio = () => {

  return (
  <ContInit>
      <Mensaje>Practica tus conocimientos en la categoría que prefieras.</Mensaje>
<<<<<<< HEAD
        
=======
      
      <BotonHtml>
<Link to = "#" onClick = {toPage()}><img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380129/workshop-2/HTMLLOGO_rjxhd3.png" alt="HTML" /></Link>
      </BotonHtml>

      <BotonJs>
      <Link to = "#" onClick = {toPage()}><img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380340/workshop-2/JsLogo_b5fjti.png" alt="JavaScript." /></Link>
      </BotonJs>

<BotonCSS>
<Link to = "#" onClick = {toPage()}><img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380233/workshop-2/CssLogo_vpj0p1.png" alt="CSS" /></Link>
</BotonCSS>
    
>>>>>>> 54e1baee533bfe0bb31e6e528ea7702c4d785ad2
  </ContInit>
  );
};

export default Inicio;
