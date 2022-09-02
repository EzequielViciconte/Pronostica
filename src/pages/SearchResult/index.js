import React, { Fragment } from 'react';
import {useParams} from 'react-router-dom';
import Navegacion from '../../componentes/layout/Navegacion/Navegacion';
import ClimaSemana from '../../componentes/Pronosticos/ClimaSemana';
import usePronosDia from '../../hooks/usePronosDias';
import usePronos from '../../hooks/UsePronos';
import DatosClima from '../../componentes/Pronosticos/datosClima'



const SearchResult = () => {
    const {lat,lon} = useParams();
    const {Clima} = usePronosDia({lat,lon});
    const {Pronostico} = usePronos({lat,lon});

    const CiudadActual = Clima.city_name

    return (
    <Fragment> 
        <Navegacion Clima={Clima}/>
        <main className='caja-contenido col-9'>
        <ClimaSemana 
        Pronostico={Pronostico}
        Ciudad={CiudadActual}
        />

        <section className='Seccion'>
            <h2>Detalles del Dia</h2>
            <DatosClima
            Presiondat={Clima.pres}
            VisibilidadDat={Clima.vis}
            VientoDat={Clima.wind_spd}
            HumedadDat={Clima.rh}
            />
        </section>
        </main>
    </Fragment>
    )


}

export default SearchResult;