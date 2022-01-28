import React from "react";
import { Link } from "react-router-dom";
import {
  ContInit,
  Mensaje,
  BotonHtml,
  BotonCSS,
  BotonJs,
} from "../style/StyledInicio";

const Inicio = () => {
  return (
<<<<<<< HEAD
  <ContInit>
      <Mensaje>Practica tus conocimientos en la categoría que prefieras.</Mensaje>

      
=======
    <ContInit>
      <Mensaje>
        Practica tus conocimientos en la categoría que prefieras.
      </Mensaje>

>>>>>>> 1caddeac1aeb16573765bc389d574f1afd83a64c
      <BotonHtml>
        <Link to="#" onClick>
          <img
            src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380129/workshop-2/HTMLLOGO_rjxhd3.png"
            alt="HTML"
          />
        </Link>
      </BotonHtml>

      <BotonJs>
        <Link to="#" onClick>
          <img
            src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380340/workshop-2/JsLogo_b5fjti.png"
            alt="JavaScript."
          />
        </Link>
      </BotonJs>

<<<<<<< HEAD
<BotonCSS>
<Link to = "#" onClick = {toPage()}><img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380233/workshop-2/CssLogo_vpj0p1.png" alt="CSS" /></Link>
</BotonCSS>
</ContInit>  

=======
      <BotonCSS>
        <Link to="#" onClick>
          <img
            src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380233/workshop-2/CssLogo_vpj0p1.png"
            alt="CSS"
          />
        </Link>
      </BotonCSS>
    </ContInit>
>>>>>>> 1caddeac1aeb16573765bc389d574f1afd83a64c
  );
};

export default Inicio;
