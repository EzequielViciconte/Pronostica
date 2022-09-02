import React from 'react';
import Presion from './DatosComp/AirePre';
import Humedad from './DatosComp/Humedad';
import Viento from './DatosComp/Viento';
import Visibilidad from './DatosComp/Visibilidad';

function datosClima ({Presiondat,HumedadDat,VisibilidadDat,VientoDat})  {
    return( 
    <div className='ContenedorDatos'>
        <Humedad
        Humedad={HumedadDat}
        />
        <Viento
        Viento={VientoDat}
        />
        <Visibilidad
        Visibilidad={VisibilidadDat}
        />
        <Presion
        Presion={Presiondat}
        />
    </div>
    )
}

export default datosClima;