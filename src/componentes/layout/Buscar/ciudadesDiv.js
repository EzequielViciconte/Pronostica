import React from 'react';
import CiudadesComp from './Ciudades';

const CiudadesDiv = ({Ciudades}) => {

    return <div className='divCiudades None'>
            <ul className='ListaCiudades'>
                {Ciudades.map(singleCity => 
                    <CiudadesComp

                    Ciudades={singleCity}
                    />
                    
                )}
            </ul>
        </div>
    
}

export default CiudadesDiv;