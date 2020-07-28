import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import PageDefault from '../../../components/PageDefault'

function CadastroVideo() {
    return (
      <PageDefault>
        Página de CadastroVideo
        <Button as={Link} to="/"> Home </Button>
        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo