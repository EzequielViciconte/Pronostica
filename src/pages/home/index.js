import React, { Fragment,useState} from 'react';


import Navegacion from '../../componentes/layout/Navegacion/Navegacion';
import ClimaSemana from '../../componentes/Pronosticos/ClimaSemana';
import usePronos from '../../hooks/UsePronos';
import usePronosDia from '../../hooks/usePronosDias';
import useCiudades from '../../hooks/useCiudades';
import DatosClima from '../../componentes/Pronosticos/datosClima'
import Buscar from '../../componentes/layout/Buscar/Buscar';



const Home = () => {
    const {Pronostico} = usePronos()
    const {Clima} = usePronosDia();




    const CiudadActual = Clima.city_name
    




    return(
        <Fragment> 
            <Buscar/>
            <Navegacion
            Buscador={'true'}
            Clima={Clima}
            />
            <main className='caja-contenido col-9'>
            <ClimaSemana
            Ciudad={CiudadActual}
            Pronostico={Pronostico}
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

export default Home;