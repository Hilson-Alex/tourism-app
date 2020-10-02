import React, { Component } from 'react'

class HomePage extends Component {
    render(){
        return(
            <>
                <h1>Guia Turístico</h1>
                <div className="main">
                    <div className="input">
                        <form>
                            <h2>Preencha os campos com o que se encaixa melhor pra você</h2>

                            <div className="form">
                                <h4>Época do Ano: </h4>
                                <input id="epoca" name="epoca" type="text"/>
                            </div>

                            <div className="form">
                                <h4>Custo: </h4>
                                <select id="custo" name="custo">
                                    <option value="importante">Importante</option>
                                    <option value="poucoImportante">Pouco Importante</option>
                                    <option value="naoImportante">Não Importante</option>
                                </select>
                            </div>

                            <div className="form">
                                <h4>Qtd de Pessoas: </h4>
                                <input id="qtdPessoas" name="qtdPessoas" type="number"/>
                            </div>

                            <div className="form">
                                <h4>Qtd de Crianças: </h4>
                                <input id="qtdCriancas" name="qtdCriancas" type="number"/>
                            </div>

                            <div className="form">
                                <h4>Tipo de Destino: </h4>
                                <select id="tipoDeDestino" name="tipoDeDestino">
                                    <option value="praia">Praia</option>
                                    <option value="cachoeira">Cachoeira</option>
                                    <option value="parqueFlorestal">Parque Florestal</option>
                                    <option value="parqueDiversoes">Parque de Diversões</option>
                                    <option value="parqueAquatico">Parque Aquático</option>
                                    <option value="trilha">Trilha</option>
                                    <option value="museu">Museu</option>
                                    <option value="centroCultural">Centro Cultural </option>
                                    <option value="zoo">Zoológico</option>
                                    <option value="aquario">Aquário</option>
                                </select>
                            </div>

                            <div className="form">
                                <h4>Distancia: </h4>
                                <select id="distancia" name="distancia">
                                    <option value="importante">Importante</option>
                                    <option value="poucoImportante">Pouco Importante</option>
                                    <option value="naoImportante">Não Importante</option>
                                </select>
                            </div>

                            <div className="form">
                                <h4>Idade do Rolê: </h4>
                                <select id="idadeRole" name="idadeRole">
                                    <option value="criancas">Crianças</option>
                                    <option value="jovens">Jovens</option>
                                    <option value="jovensAdultos">Jovens Adultos</option>
                                    <option value="adultos">Adultos</option>
                                    <option value="idosos">Idosos</option>
                                </select>
                            </div>

                        </form>
                    </div>
                        <h2>Veja o melhor ponto turístico pra você curtir</h2>
                    <div>
                    </div>
                </div>
            </>
            
        );
    }
}

export default HomePage