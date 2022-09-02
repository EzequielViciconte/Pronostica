import React, { useEffect, useState } from 'react';
import getPronoDia from '../services/getPronoDia';

const usePronosDia = ({lat} = {lat:'-34.6075682'} ,{lon} = {lon:'-58.4370894'}) => {

    const [Clima,setClima] = useState({
        icon:'c01d'
    });
    useEffect(() => {
        getPronoDia(lat,lon)
            .then(diaClima => {
                setClima(diaClima);
            })
    },[lat,lon])

    return {Clima};
}

export default usePronosDia;