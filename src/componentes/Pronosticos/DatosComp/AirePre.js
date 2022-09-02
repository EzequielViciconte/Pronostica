import React from 'react';

const Presion = ({Presion}) => {
    return(
        <div className='DivViento'>
            <p className="ParrafoDiv">Presion del Aire</p>
            <p className="ParrafoVal">{Presion}<span>mb</span></p>
        </div>
    )
}

export default Presion;