import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import LogginButton from './LogginButton';

const NavMenu = styled.nav`
    width: 100vw;
    height: 60px;
    border: 0 solid #000;
    background-color: #fff;
    border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    display:flex;
    justify-content:center;
`

const Container = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 975px;
    background-color:white;
`
const Title = styled.p`
    font-size: 20px;
    font-weight: 700;
`
const Greeting = styled.p`
    font-size:16px;
    font-weight:500;
    margin-left:20px;
`
const Loggin = styled.div`
    display:flex;
    align-items:center;
`


const Nav = () => {

    const { loggin } = useContext(UserContext)

    return(
        <NavMenu>
            <Container>
            <Title>Contextgram</Title>
            {   loggin 
                ? <Loggin>
                    <LogginButton text="Cerrar Sesión"/>
                    <Greeting>Has iniciado sesion</Greeting>
                    </Loggin>
                :<LogginButton text="Iniciar Sesión"/>
            }
            </Container>
        </NavMenu>
    )
}

export default Nav;