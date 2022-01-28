import React from 'react';
import { Link } from 'react-router-dom';
import { ContImg, ContIni, Formato, Inputs, Logo, Olvido, Titulo } from '../style/StyledCont';
import '../style/StyledEntrar.css'
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
                <Inputs type="text" placeholder='Ingresa tu usuario' />
                <Inputs type="password" placeholder='Ingresa tu contraseña' />
                <Olvido>¿Se te olvido la contraseña?</Olvido>
                <center>
                    <Link className='entrar' to='/Inicio'>Inicio</Link>
                </center>
            </Formato>
        </ContIni>
    );
};

export default Container;
