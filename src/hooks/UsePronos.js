import React, { useEffect, useState } from 'react';
import getPronoSemana from '../services/getPronoSemana';
import Spiner from '../componentes/Spiner/Spiner'


const usePronos = ({lat} = {lat:'-34.6075682'} ,{lon} = {lon:'-58.4370894'}) => {

    const [Pronostico,UpdateProno] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        getPronoSemana(lat,lon)
            .then(prono => {
                UpdateProno(prono);
                setLoading(false);
            })
    },[lat,lon])
    
    if (loading) return <Spiner></Spiner> 

    
    return{Pronostico}
}

export default usePronos;