import styled from 'styled-components';

const Opcao = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    font-size: 20px;
`

const Opcoes = styled.ul`
    display: flex;
`

const textoOpcoes = ['MINHA ESTANTE', 'CATEGORIAS', 'FAVORITOS']

function OpcoesHeader() {
    return (
        <Opcoes>
          { textoOpcoes.map((texto) => (
            <Opcao><p>{texto}</p></Opcao>
          )) }
        </Opcoes>
    )
}

export default OpcoesHeader;