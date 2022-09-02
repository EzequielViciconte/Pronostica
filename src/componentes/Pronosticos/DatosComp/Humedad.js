import React from 'react';

const Humedad = ({Humedad}) => {
    return(
        <div className='DivViento'>
            <p className="ParrafoDiv">Humedad</p>
            <p className="ParrafoVal">{Humedad}<span>%</span></p>
        </div>
    )
}

export default Humedad;