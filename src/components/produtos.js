import React from 'react';
import './produtos.css';

class Produtos extends React.Component {
    state = {
        sortingParameter: "nome"
    }
    updateSortingParameter = (ev) => {
        this.setState({
            sortingParameter: ev.target.value
        })
    }

    render() {
        return (
            <div className='containerPro'>
                <div className='header'>
                    <h2>{this.props.titulo}</h2>
                    <div className='selecao'>
                        <label for='sort'>Ordenar:</label>
                        <select id="ordena"
                            name="sort"
                            value={this.state.sortingParameter}
                            onChange={this.updateSortingParameter}>
                            <option value="nome">Nome</option>
                            <option value="preco">Preço</option>
                        </select>
                    </div>
                </div>
                <div className='produtos'>
                    <div className='card'>
                        <div className='imagem'>
                            <img src='https://images-shoptime.b2w.io/produtos/4972968075/imagens/brinquedo-aquaplay-nave-espacial/4972968075_1_large.jpg' title='imagemLousa' alt='brinquedo aqua foguete'></img>
                        </div>
                        <div className='texto'>
                            <h5>Brinquedo aqua foguete</h5>
                            <p>R$: 35,90</p>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='imagem'>
                            <img src='https://imgs.extra.com.br/1525364338/1xg.jpg?imwidth=292' title='imagemFoguete' alt='brinquedo explorador foguete'></img>
                        </div>
                        <div className='texto'>
                            <h5>Foguete explorador plane</h5>
                            <p>R$: 82,00</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='imagem'>
                            <img src='https://imgs.casasbahia.com.br/1515656446/1xg.jpg?imwidth=292' title='imagemFoguete' alt='brinquedo capsula foguete'></img>
                        </div>
                        <div className='texto'>
                            <h5>Cápsula foguete space set</h5>
                            <p>R$: 75,50</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='imagem'>
                            <img src='https://dkl2hx95l74wc.cloudfront.net/Custom/Content/Products/88/28/88288_brinquedo-rover-espacial-astronauta-fun-pr-13144-f00242_m2_637771431298669242.jpg' title='imagemFoguete' alt='brinquedo rover espacial'></img>
                        </div>
                        <div className='texto'>
                            <h5>Rover espacial Fun</h5>
                            <p>R$: 60,50</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='imagem'>
                            <img src='https://imgs.extra.com.br/1531385459/1xg.jpg?imwidth=292' title='imagemFoguete' alt='brinquedo rover espacial'></img>
                        </div>
                        <div className='texto'>
                            <h5>Foguete espacial Legends</h5>
                            <p>R$: 110,90</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='imagem'>
                            <img src='https://images-americanas.b2w.io/produtos/2381615471/imagens/traje-de-astronauta-infantil-infantil-traje-espacial-astronauta-infantil-aderecos-m/2381615471_1_large.jpg' title='imagemTraje' alt='roupa infantil espacial'></img>
                        </div>
                        <div className='texto'>
                            <h5>Traje espacial juvenil</h5>
                            <p>R$: 170,50</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='imagem'>
                            <img src='https://imgs.ponto.com.br/1536529224/1xg.jpg?imwidth=500' title='imagemTraje' alt='Roupa traje espacial'></img>
                        </div>
                        <div className='texto'>
                            <h5>Traje espacial juvenil</h5>
                            <p>R$: 142,90</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='imagem'>
                            <img src='https://http2.mlstatic.com/D_NQ_NP_985276-MLB49356532617_032022-O.jpg' title='imagemTraje' alt='Roupa traje espacial'></img>
                        </div>
                        <div className='texto'>
                            <h5>Traje espacial infantil</h5>
                            <p>R$: 95,90</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='imagem'>
                            <img src='https://sc04.alicdn.com/kf/H2dd9803b63704715af94f113463978adj.jpg' title='imagemTraje' alt='Roupa traje espacial'></img>
                        </div>
                        <div className='texto'>
                            <h5>Traje espacial feminino</h5>
                            <p>R$: 80,90</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='imagem'>
                            <img src='https://www.megashopsul.com.br/3334-large_default/fantasia-infantil-espacial-meninas-festa-halloween.jpg' title='imagemTraje' alt='Roupa traje espacial'></img>
                        </div>
                        <div className='texto'>
                            <h5>Traje espacial feminino</h5>
                            <p>R$: 104,90</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Produtos