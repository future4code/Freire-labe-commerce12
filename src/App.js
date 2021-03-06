import React from "react";
import "./App.css";
import Filter from "./components/Filter/Filter";
import Produto from "./components/Produto/Produto";
import styled from "styled-components";
import Carrinho from "./components/Carrinho/Carrinho";

const Conteudo = styled.div`
  display: grid;
  grid-template-columns: 11vw 1fr 18vw;
  grid-template-rows: 60px 1fr;

`;



class App extends React.Component {
  state = {
    valorMinimo: 1,
    valorMaximo: 1000,
    buscaNome: "",
    ordem: "Crescente",
    carrinho: [],

    produtos: [
      {
        id: 1,
        name: "Brinquedo aqua foguete",
        value: 35.9,
        imageUrl:
          "https://images-shoptime.b2w.io/produtos/4972968075/imagens/brinquedo-aquaplay-nave-espacial/4972968075_1_large.jpg"
      },
      {
        id: 2,
        name: "Foguete explorador plane",
        value: 82.0,
        imageUrl: "https://imgs.extra.com.br/1525364338/1xg.jpg?imwidth=292"
      },
      {
        id: 3,
        name: "Cápsula foguete space set",
        value: 75.5,
        imageUrl:
          "https://imgs.casasbahia.com.br/1515656446/1xg.jpg?imwidth=292"
      },
      {
        id: 4,
        name: "Rover espacial Fun",
        value: 60.5,
        imageUrl:
          "https://dkl2hx95l74wc.cloudfront.net/Custom/Content/Products/88/28/88288_brinquedo-rover-espacial-astronauta-fun-pr-13144-f00242_m2_637771431298669242.jpg"
      },
      {
        id: 5,
        name: "Foguete espacial Legends",
        value: 110.9,
        imageUrl: "https://imgs.extra.com.br/1531385459/1xg.jpg?imwidth=292"
      },
      {
        id: 6,
        name: "Traje espacial juvenil",
        value: 170.5,
        imageUrl:
          "https://images-americanas.b2w.io/produtos/2381615471/imagens/traje-de-astronauta-infantil-infantil-traje-espacial-astronauta-infantil-aderecos-m/2381615471_1_large.jpg"
      },
      {
        id: 7,
        name: "Traje espacial juvenil",
        value: 142.9,
        imageUrl: "https://imgs.ponto.com.br/1536529224/1xg.jpg?imwidth=500"
      },
      {
        id: 8,
        name: "Traje espacial infantil",
        value: 95.9,
        imageUrl:
          "https://http2.mlstatic.com/D_NQ_NP_985276-MLB49356532617_032022-O.jpg"
      },
      {
        id: 9,
        name: "Traje espacial feminino",
        value: 80.9,
        imageUrl:
          "https://sc04.alicdn.com/kf/H2dd9803b63704715af94f113463978adj.jpg"
      },
      {
        id: 10,
        name: "traje espacial feminino",
        value: 104.9,
        imageUrl:
          "https://www.megashopsul.com.br/3334-large_default/fantasia-infantil-espacial-meninas-festa-halloween.jpg"
      }
    ]
  };

  addProduto = (produtoId) => {
    const produtoCarrinho = this.state.carrinho.find(
      (produto) => produtoId === produto.id
    );

    if (produtoCarrinho) {
      const addProdutoNoCarrinho = this.state.carrinho.map((produto) => {
        if (produtoId === produto.id) {
          return {
            ...produto,
            quantity: produto.quantity + 1
          };
        }

        return produto;
      });

      this.setState({ carrinho: addProdutoNoCarrinho });
    } else {
      const produtoAdicionado = this.state.produtos.find(
        (produto) => produtoId === produto.id
      );

      const addProdutoNoCarrinho = [
        ...this.state.carrinho,
        { ...produtoAdicionado, quantity: 1 }
      ];

      this.setState({ carrinho: addProdutoNoCarrinho });
    }
  };

  removeProduto = (produtoId) => {
    const addProdutoNoCarrinho = this.state.carrinho
      .map((produto) => {
        if (produto.id === produtoId) {
          return {
            ...produto,
            quantity: produto.quantity - 1
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantity > 0);

    this.setState({ carrinho: addProdutoNoCarrinho });
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
        <div className="header">
          <h2>Produtos</h2>
        </div>
        <Conteudo>
          <Filter
            onChangeValorMinimo={this.onChangeMinimo}
            valorMinimo={this.state.valorMinimo}
            onChangeValorMaximo={this.onChangeMaximo}
            valorMaximo={this.state.valorMaximo}
            onChangeBuscaNome={this.onChangeBuscaNome}
            buscaNome={this.state.buscaNome}
            ordem={this.state.ordem}
            onChangeOrdem={this.onChangeOrdem}
            produtos={this.state.produtos}
          />
          <Produto
            produtos={this.state.produtos}
            valorMinimo={this.state.valorMinimo}
            valorMaximo={this.state.valorMaximo}
            buscaNome={this.state.buscaNome}
            ordem={this.state.ordem}
            addProduto={this.addProduto}
            carrinho={this.state.carrinho}
          />
          <Carrinho
            addProduto={this.addProduto}
            carrinho={this.state.carrinho}
            produtos={this.state.produtos}
            removeProduto={this.removeProduto}
          ></Carrinho>
        </Conteudo>
      </div>
    );
  }
}

export default App;
