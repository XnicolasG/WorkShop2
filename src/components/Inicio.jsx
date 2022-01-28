import React from "react";
import { Link } from "react-router-dom";
import { ContInit, Mensaje, Botones } from "../style/StyledInicio";

const Inicio = () => {
  return (
    <ContInit>
      <Mensaje>
        Practica tus conocimientos en la categoría que prefieras.
      </Mensaje>

      <Botones>
        <Link to="#" onClick>
          <img
            src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380129/workshop-2/HTMLLOGO_rjxhd3.png"
            alt="HTML"
          />
        </Link>

        <Link to="#" onClick>
          <img
            src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380340/workshop-2/JsLogo_b5fjti.png"
            alt="JavaScript."
          />
        </Link>

        <Link to="#" onClick>
          <img
            src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380233/workshop-2/CssLogo_vpj0p1.png"
            alt="CSS"
          />
        </Link>
        </Botones>
    </ContInit>
  );
};

export default Inicio;
