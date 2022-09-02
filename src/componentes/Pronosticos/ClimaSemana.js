import React,{Fragment } from 'react';

import {useNavigate} from 'react-router-dom';




import ClimaDia from './ClimaDia';

function ClimaSemana({Pronostico,Ciudad}) {
    
    return <Fragment> 
        {Pronostico != undefined ? (
            <Fragment> 
                <h2>{`Clima de la Semana En ${Ciudad}`}</h2>
                <div className="ContenedorDiasPro">
                    {Pronostico.map(singleDias => 
                    <ClimaDia
                    key={singleDias.datetime}
                    Fecha={singleDias.datetime}
                    TempMax={singleDias.high_temp}
                    TempMin={singleDias.low_temp}
                    Icono={singleDias.icon}
                    ></ClimaDia>
                    ) }
                </div>     
            </Fragment>
        ) : <h2 className='CiudadNoExistente'>Ciudad No reconocida</h2>
    }
    </Fragment>



        
    
}

export default ClimaSemana;