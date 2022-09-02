import React, { useEffect, useState } from 'react';

import getCiudades from '../services/getCiudades';


const useCiudades = ({Ciudad} = {Ciudad:'Buenos Aires'}) =>{
    const [Ciudades,setCiudad] = useState([]);
    useEffect(() =>{
        getCiudades(Ciudad)
        .then(Ciu=>{
            setCiudad(Ciu)
        })
    },[Ciudad])

    return {Ciudades};

}

export default useCiudades;