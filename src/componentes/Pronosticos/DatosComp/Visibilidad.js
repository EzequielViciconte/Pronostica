import React from 'react';

const Visibilidad = ({Visibilidad}) => {
    return(
        <div className='DivViento'>
            <p className="ParrafoDiv">Visibilidad</p>
            <p className="ParrafoVal">{Visibilidad}<span> KM</span></p>
        </div>
    )
}

export default Visibilidad;