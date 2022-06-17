import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  display: flex;
  width: 20%;
  margin-bottom: 15px;
`;

const Select = styled.select`
  display: flex;
  width: 21%;
  margin-bottom: 25px;
`;

class Filter extends React.Component {
  render() {
    const listaFiltrada = this.props.produtos.filter((produto) => {
      if (produto.name.includes(this.props.buscaNome)) {
        return true;
      }
      

      
    });
    const listaFiltradaMinimo = listaFiltrada.filter((produto) => {
      if (produto.value > this.props.valorMinimo) {
        return true;
      }
    });
    const listaFiltradaMaximo = listaFiltradaMinimo.filter((produto) => {
      if (produto.value < this.props.valorMaximo) {
        return true;
      }
    });
    const listaOrdenada = listaFiltradaMaximo.sort((a, b) => {
      if (this.props.ordem === "Crescente") {
        return a.value - b.value;
      } else {
        return b.value - a.value;
      }
    });
    return (
      <Container>
        <h3>Filtros</h3>
        <label htmlFor="Valor minimo">Valor mínimo</label>
        <Input
          type="number"
          onChange={this.props.onChangeValorMinimo}
          value={this.props.valorMinimo}
        />
        <label htmlFor="Valor maximo">Valor máximo</label>
        <Input
          type="number"
          onChange={this.props.onChangeValorMaximo}
          value={this.props.valorMaximo}
        />
        <label htmlFor="Buscar produto">Buscar protudo</label>
        <Input
          type="text"
          onChange={this.props.onChangeBuscaNome}
          value={this.props.buscaNome}
        />
        <label htmlFor="Ordenar Produto">filtrar por preço</label>
        <Select
          name=""
          id=""
          onChange={this.props.onChangeOrdem}
          value={this.props.ordem}
        >
          <option value={"Crescente"}>Crescente</option>
          <option value={"Decrescente"}>Decrescente</option>
        </Select>
        <ul>
          {listaOrdenada.map((produto) => {
            return (
              <li>
                {produto.name} Valor: R$ {produto.value}
              </li>
            );
          })}
        </ul>
        <br />
        Quantidade de itens: {listaFiltradaMaximo.length}
      </Container>
    );
  }
}

export default Filter;