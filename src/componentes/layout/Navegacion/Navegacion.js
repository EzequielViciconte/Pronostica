import React, { useState } from 'react';
import ComponentNav from './ClimaNave';
import BuscadorImg from '../../../assets/img/Buscador.png'

const Navegacion = ({Clima,Buscador}) => {
    const {app_temp,description,icon,city_name} = Clima;

        let clickBuscador = () => {
            const Formulario = document.querySelector('.Formulario')
            if(Formulario){
                Formulario.classList.toggle('Invisible');
            }
        }

    return <aside className="sidebar col-3">
        {Buscador == 'true' ? <img onClick={clickBuscador}  className='Buscador' src={BuscadorImg}/>  : '' }
        <ComponentNav
            Desc={description}
            TempMax={app_temp}
            Icono={icon}
            Ciudad={city_name}
        ></ComponentNav>
        </aside>
    
}

export default Navegacion;