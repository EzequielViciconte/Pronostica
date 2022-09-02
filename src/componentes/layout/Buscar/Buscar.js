import React, { Fragment,useState } from 'react';


//Static
import Cerrar from '../../../assets/img/Cerrar.webp';


// Componentes
import CiudadesDiv from './ciudadesDiv';
import useCiudades from '../../../hooks/useCiudades';


const Buscar = () =>{
    const [Ciudad,setCiudad] = useState('Buenos Aires');
    const {Ciudades} = useCiudades({Ciudad});


    const handleSubmit = evt => {
        evt.preventDefault();
        const Input = document.querySelector('.InputCiudad');
        const divCiudad = document.querySelector('.divCiudades');
        if(Input.value != ''){
            divCiudad.classList.remove('None');
            const InputValue = Input.value
            setCiudad(InputValue);
        }

    }


    const cerrarForm = () => {
        const Formulario = document.querySelector('.Formulario')
        Formulario.classList.toggle('Invisible');
    }
    return(
        <Fragment> 
            <form className='Formulario Invisible'  onSubmit={handleSubmit}>
            
                <img src={Cerrar} className='Cerrar' onClick={cerrarForm} />
                <input type='text' className='InputCiudad' placeholder='Busque su Ciudad'></input>
                <CiudadesDiv
                Ciudades={Ciudades}
                />

                <button>Buscar</button>
        </form>
        </Fragment>
    )
}

export default Buscar;