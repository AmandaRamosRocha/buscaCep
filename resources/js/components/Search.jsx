import '../bootstrap'
import React from "react";
import '../../css/components/app.css'

const Search = () => {
    return(
        <div className='container'>
            <div className='box'>
                <h1>Busque um CEP</h1>
                <h4>Ultilize o campo abaixo para pesquisar um CEP</h4>
                <input placeholder='Insira o CEP' />
                <h5>Não utilize nº de casa/apto/lote/prédio ou abreviação.</h5>
                <button>Buscar</button>
            </div>
        </div>
    )
}

export default Search