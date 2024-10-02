import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa';
import UltimosLancamentos from '../componentes/UltimosLancamentos';

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(90deg, #FFA07A 35%, #FA8072);
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home; 