import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';
import livroImg from '../imagens/livro.png'

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(990deg, #002F52 35%, #326589 165%);
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    if(favoritosDaAPI){
      setFavoritos(favoritosDaAPI)
    } else {
      setFavoritos([])
    }
  }

  async function deletarFavorito(id) {
    await deleteFavorito(id)
    await fetchFavoritos()
    alert(`Livro de id: ${id} deletado!`)
}

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <AppContainer>
        <Titulo>Aqui estão seus Livros Favoritos</Titulo>
          <ResultadoContainer>
      {favoritos.map( favorito => (
        favorito && (
        <Resultado key={favorito.id} onClick={() => deletarFavorito(favorito.id)}>
          <img src={livroImg}/>
          <p>{favorito.nome}</p>
        </Resultado>
        )  
      ))}
      </ResultadoContainer>
    </AppContainer>
  );
}

export default Favoritos; 