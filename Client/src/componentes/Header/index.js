import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #A52A2A;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
      </HeaderContainer>
    )
}

export default Header;