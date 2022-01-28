import React from "react";
import { Link } from "react-router-dom";
import {
  ContInit,
  Mensaje,
  BotonHtml,
  BotonCSS,
  BotonJs,
  Img1,
} from "../style/StyledInicio";

const Inicio = () => {
  return (
  <ContInit>
      <Mensaje>Practica tus conocimientos en la categoría que prefieras.</Mensaje>

      <BotonHtml>
        <Link to="#" onClick>
          <Img1><img
            src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380129/workshop-2/HTMLLOGO_rjxhd3.png"
            alt="HTML"/>
            </Img1>
          
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

      <BotonCSS>
        <Link to="#" onClick>
          <img
            src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380233/workshop-2/CssLogo_vpj0p1.png"
            alt="CSS"
          />
        </Link>
      </BotonCSS>
    </ContInit>
  );
};

export default Inicio;
