import React from 'react';
const Iconos = require.context('../../../assets/icons',true);

const ComponentNav = ({Desc,TempMax,Icono,Ciudad}) => {
    return(
        <aside className="sidebar col-3">
            <h2>{`Pronostico Actual de  ${Ciudad}`}</h2>
            <div className="ClimaHoy">
                <img src={Iconos(`./${Icono}.png`)}/>
                <p className="Grados">{TempMax}<span>°C</span> </p>
                <p>{Desc}</p>
            </div>
        </aside>
    )
}

export default ComponentNav;