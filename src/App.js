// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import React, {Component} from 'react';
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

class App extends Component {
  constructor(){
    super();
    this.state = {
      cantidad: 0
    }
    this.aumentarCantidad = this.aumentarCantidad.bind(this);
  }

  aumentarCantidad(){
    this.setState({
      cantidad: this.state.cantidad + 1
    })
  }

  render(){
    return (
      <div className="App">
        <Cabecera cantidad={this.state.cantidad}/>
        <Listado aumentarCantidad={this.aumentarCantidad}/>
      </div>
    );
  }
  
}

export default App;
