import React from 'react';
import { Link } from 'react-router-dom';

const Ciudades = ({Ciudades}) => {
    return(
        <Link to={`/Buscar/${Ciudades.lat}/${Ciudades.lon}`}> 
            <li>
                <p>{`${Ciudades.name}, ${Ciudades.country}`}</p>
            </li>
        </Link>
    )

    
}

export default Ciudades;