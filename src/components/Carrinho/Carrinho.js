import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

class Carrinho extends React.Component {
  valorTotal = () => {
    let valor = 0;

    for (let product of this.props.carrinho) {
      valor += product.value * product.quantity;
    }

    return valor;
  };

  render() {
    const listaProdutos = this.props.carrinho.map((produto) => {
      return (
        <p>
          {produto.quantity}X {produto.name}{" "}
          <button onClick={() => this.props.removeProduto(produto.id)}>
            remover
          </button>
        </p>
      );
    });
    return (
      <Container>
        <h3>Carrinho</h3>
        <p>{listaProdutos}</p>
        <p><strong>Valor total: R${this.valorTotal().toFixed(2)}</strong> </p>
      </Container>
    );
  }
}

export default Carrinho;
