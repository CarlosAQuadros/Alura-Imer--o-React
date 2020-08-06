import React,{useState} from "react"
import PageDefault from "../../../components/PageDefault"
import {Link} from "react-router-dom"

function CadastroCategoria() {

const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial')
  console.log(nomeDaCategoria);

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {nomeDaCategoria} </h1>
  
        <form>
  
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={nomeDaCategoria}
            />
          </label>
      
          <button>
            Cadastrar
          </button>
        </form>
  
  
        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
  };
  export default CadastroCategoria