import React from 'react';


const HTML = () => {

    
const navigate = useNavidate();

  return (
  <div>
      <div>
          <button onClick={()=> navigate(`/Inicio`)}>X</button>
      <progress max="100"></progress>
      </div>
      <div>
          <img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1643380361/workshop-2/PersonajePreguntas_gh645f.png" alt="" />
          <p></p>
      </div>
  </div>
  );
};

export default HTML;
