import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Lista = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 15px;
  margin-left: 3vw;
`;

const Produtos = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whites;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px darkgray;
`;
const Img = styled.img`
  width: 10vw;
  margin: auto;
`;

const Botao = styled.button`
  height: 3vh;
  margin: 8px auto;
`;

const Nome = styled.p`
  text-align: center;
  display: inline;
  font-weight: bold;
  font-size: 85%;
  margin: 2px;
`;
const Qtn = styled.p`
  display: inline;
  font-weight: bold;
  margin-left: 3vw;
`;
class Produto extends React.Component {
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
        <Qtn>Quantidade de itens: {listaFiltradaMaximo.length}</Qtn>
        <br />
        <Lista>
          {listaOrdenada.map((produto) => {
            return (
              <Produtos>
                <Img src={produto.imageUrl} alt="foto produto" />{" "}
                <Nome>
                  {produto.name} <br /> Valor: R$ {produto.value}
                </Nome>
                <Botao>adicionar ao carrinho</Botao>
              </Produtos>
            );
          })}
        </Lista>
      </Container>
    );
  }
}

export default Produto;
