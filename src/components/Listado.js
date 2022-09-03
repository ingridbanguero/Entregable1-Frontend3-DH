import React from 'react'

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
import Lista from './data.json';
import Item from './Item';

export default function Listado({ aumentarCantidad }) {
  return (
    <div className='container'>
      { Lista.map((item, index) => 
        <Item aumentarCantidad={aumentarCantidad} data={item} key={index}></Item>
      )}
    </div>
  )
}
