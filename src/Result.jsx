import React from 'react';
import { saveResult } from './httpHandle'
const { Component } = require("react");



class Result extends Component{

    state = {
        current: this.props.result[0]
    }

    handleSelectChange = (e) => {
        this.handleResult(e.target.value)
    }

    handleResult(indice) {
        this.setState({
            current: this.props.result[indice],
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.form.custo = this.state.current.custo
        saveResult({...this.props.form, solucao: this.state.current.solucao});
    }

    render() {
        console.log(this.props.result);
        return (
            <div className="outputContent">
                <h2>{this.state.current.solucao.lugar}</h2>
                <h5>{this.state.current.solucao.descricao}</h5>
                <a href={this.state.current.solucao.link}>Veja o Lugar</a> <br/><br/>
                <button onClick={this.handleClick}>Gostei Desse!</button>
                
                <h4>Veja Outros</h4>
                <select onChange={this.handleSelectChange}>
                {this.props.result.map((r, i) => {
                    return (<option value={i}>{r.solucao.lugar}</option>)
                })}
                </select>
                
            </div>
        )
    }
}

export default Result;