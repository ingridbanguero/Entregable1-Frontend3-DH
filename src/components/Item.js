
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { Component } from 'react';

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
      stock: props.data.stock
    }
    this.comprar = this.comprar.bind(this);
  }
  comprar(){
    this.setState({ stock: this.state.stock - 1})
    this.props.aumentarCantidad();
  }
  render() {
    return (
      <div className='producto'>
        <h3>{ this.props.data.producto.nombre }</h3>
        <p>{ this.props.data.producto.descripcion }</p>
        <h5>
          En stock:
          {
            this.state.stock === 0 ? <span>agotado</span> : this.state.stock
          }

        </h5>
        <button onClick={this.comprar} disabled={this.state.stock === 0}> { this.state.stock === 0 ? 'SIN STOCK' : 'COMPRAR' } </button>
      </div>
    )
  }
  
}

export default Item;