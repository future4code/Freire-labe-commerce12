

import './App.css';


import React from "react";
import Filter from "./components/Filter";
const produto = [
  {
    id: 1,
    name: "Colete",
    value: 15.2,
    imageUrl: "https://picsum.photos/200/200"
  },
  {
    id: 2,
    name: "Colete12",
    value: 1.5,
    imageUrl: "https://picsum.photos/200/201"
  },
  {
    id: 1,
    name: "Blusa",
    value: 95.8,
    imageUrl: "https://picsum.photos/200/200"
  },
  {
    id: 1,
    name: "Foguete",
    value: 30,
    imageUrl: "https://picsum.photos/200/200"
  }
]

class App extends React.Component {
  state = {
    valorMinimo: 1,
    valorMaximo: 1000,
    buscaNome: "",
    ordem: "Crescente",
    
  };

  onChangeMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value });
  };
  onChangeMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value });
  };
  onChangeBuscaNome = (event) => {
    this.setState({ buscaNome: event.target.value });
  };
  onChangeOrdem = (event) => {
    this.setState({ ordem: event.target.value });
  };

  render() {
    return (
      <div>
        <Filter
          onChangeValorMinimo={this.onChangeMinimo}
          valorMinimo={this.state.valorMinimo}
          onChangeValorMaximo={this.onChangeMaximo}
          valorMaximo={this.state.valorMaximo}
          onChangeBuscaNome={this.onChangeBuscaNome}
          buscaNome={this.state.buscaNome}
          ordem={this.state.ordem}
          onChangeOrdem={this.onChangeOrdem}
          produtos= {produto}
        />
      </div>
    );
  }
}

export default App;
