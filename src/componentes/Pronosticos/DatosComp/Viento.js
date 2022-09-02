import React from 'react';

const Viento = ({Viento}) => {
    return(
        <div className='DivViento'>
            <p className="ParrafoDiv">Viento</p>
            <p className="ParrafoVal">{Viento}<span>m/s</span></p>
        </div>
    )
}

export default Viento;