import React, { Component } from 'react'
import { createPost } from './httpHandle'
import Result from './Result';

const initialstate = {
        form: {
            estacao: 'VERAO',
            custo: 0.5,
            num_pessoas: 4,
            num_criancas: 2,
            tipo: 'PRAIA',
            distancia: 50,
            grupo: 'FAMILIA',
        },
        result: [],
}

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = initialstate;
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormInput = this.handleFormInput.bind(this);
    };

    handleFormInput = (name, value) => {
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [name]: value
            }
        })
    }

    onChange(e) {
        if(e.target.name === "custo"){
            this.handleFormInput(e.target.name, parseFloat(e.target.value));
        }else if(e.target.name === "num_pessoas" || e.target.name === "num_criancas"){
            this.handleFormInput(e.target.name, parseInt(e.target.value));
        }else {
            this.handleFormInput(e.target.name, e.target.value);
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        createPost(this.state.form).then(response => {
            let result = response;
            this.setState({...this.state, result: result})
        })
    };


    render(){
        return(
            <div className="page">
                <h1>Guia Turístico</h1>
                <div className="main">
                    <div className="input">
                        <h2>Preencha os campos com o que se encaixa melhor pra você</h2>    
                        <form method="POST" onSubmit={this.handleSubmit}>
                            <div className="form">
                                <h4>Época do Ano: </h4>
                                <select id='estacao' onChange={this.onChange} name='estacao' type="text">
                                    <option value="VERAO">Verão</option>
                                    <option value="OUTONO">Outono</option>
                                    <option value="INVERNO">Inverno</option>
                                    <option value="PRIMAVERA">Primavera</option>
                                </select>
                            </div>

                            <div className="form">
                                <h4>Custo: </h4>
                                <select id='custo' onChange={this.onChange} name="custo">
                                    <option value="1">Muito Importante</option>
                                    <option value="0.8">Importante</option>
                                    <option value="0.5">Mais ou Menos Importante</option>
                                    <option value="0.2">Pouco Importante</option>
                                    <option value="0">Não Importante</option>
                                </select>
                            </div>

                            <div className="form">
                                <h4>Qtd de Pessoas: </h4>
                                <input id="num_pessoas" onChange={this.onChange} name="num_pessoas" type="number"/>
                            </div>

                            <div className="form">
                                <h4>Qtd de Crianças: </h4>
                                <input id="num_criancas" onChange={this.onChange} name="num_criancas" type="number"/>
                            </div>

                            <div className="form">
                                <h4>Tipo de Destino: </h4>
                                <select id="tipo" onChange={this.onChange} name="tipo">
                                    <option value="PRAIA">Praia</option>
                                    <option value="CACHOEIRA">Cachoeira</option>
                                    <option value="PARQUE FLORESTAL">Parque Florestal</option>
                                    <option value="PARQUE DE DIVERSOES">Parque de Diversões</option>
                                    <option value="PARQUE AQUATICO">Parque Aquático</option>
                                    <option value="TRILHA">Trilha</option>
                                    <option value="MUSEU">Museu</option>
                                    <option value="CENTRO CULTURAL">Centro Cultural </option>
                                    <option value="ZOO">Zoológico</option>
                                    <option value="AQUARIO">Aquário</option>
                                </select>
                            </div>

                            <div className="form">
                                <h4>Distancia: </h4>
                                <select id="distancia" name="distancia">
                                    <option value="muitoImportante">Muito Importante</option>
                                    <option value="importante">Importante</option>
                                    <option value="maisMenosImportante">Mais ou Menos Importante</option>
                                    <option value="poucoImportante">Pouco Importante</option>
                                    <option value="naoImportante">Não Importante</option>
                                </select>
                            </div>

                            <div className="form">
                                <h4>Idade do Rolê: </h4>
                                <select id="grupo" onChange={this.onChange} name="grupo">
                                    <option value="FAMILIA">Crianças</option>
                                    <option value="ADOLESCENTES">Adolescentes</option>
                                    <option value="JOVENS">Jovens Adultos</option>
                                    <option value="ADULTOS">Adultos</option>
                                    <option value="IDOSOS">Idosos</option>
                                </select>
                            </div>

                            <input type="submit"/>
                        </form>
                    </div>

                    <div className="output">
                        <h2>Veja o melhor ponto turístico pra você curtir</h2>
                        {this.state.result.length ? <Result form={this.state.form} result={this.state.result} /> : ""}
                        
                    </div>
                </div>
            </div>
            
        );
    }
}

export default HomePage