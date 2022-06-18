import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  display: flex;
  width: 10vw;
  margin-bottom: 15px;
`;

const Select = styled.select`
  display: flex;
  width: 10vw;
  margin-bottom: 25px;
`;

class Filter extends React.Component {
  render() {
    return (
      <Container>
        <h3>Filtros</h3>
        <label htmlFor="Valor minimo">
          <strong>Valor Mínimo</strong>{" "}
        </label>
        <Input
          type="number"
          onChange={this.props.onChangeValorMinimo}
          value={this.props.valorMinimo}
        />
        <label htmlFor="Valor maximo">
          <strong>Valor Máximo</strong>
        </label>
        <Input
          type="number"
          onChange={this.props.onChangeValorMaximo}
          value={this.props.valorMaximo}
        />
        <label htmlFor="Buscar produto">
          <strong>Buscar produto</strong>
        </label>
        <Input
          type="text"
          onChange={this.props.onChangeBuscaNome}
          value={this.props.buscaNome}
        />
        <label htmlFor="Ordenar Produto">
          <strong>Ordenação</strong>
        </label>
        <Select
          name=""
          id=""
          onChange={this.props.onChangeOrdem}
          value={this.props.ordem}
        >
          <option value={"Crescente"}>Crescente</option>
          <option value={"Decrescente"}>Decrescente</option>
        </Select>
      </Container>
    );
  }
}

export default Filter;
