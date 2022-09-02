import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/es';
import moment from 'moment';


const Iconos = require.context('../../assets/icons',true);



function ClimaDia ({Fecha,TempMax,TempMin,Icono}) {
    const Dia = Fecha.split('/').reverse().join('/');
    moment().locale('es')
    return (
        <div className="PronosticoDiv">
            <p>{<Moment locale='es' format='dddd'>{Dia}</Moment>}</p>
            <img src={Iconos(`./${Icono}.png`)}/>
            <p className='Temperatura'>{`${TempMax}°C`}<span className='TempMin'>{`${TempMin}°C`}</span></p>
        </div>
           )
    
}

export default ClimaDia;