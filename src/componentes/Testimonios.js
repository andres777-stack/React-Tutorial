import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

export function Testimonio(props){
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt='Foto Emma'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <span>{props.nombre}</span> in {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} at <span>{props.empresa}</span></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}
