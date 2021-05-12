import styled from 'styled-components';
import LogginButton from './LogginButton';

const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position:fixed;
    top: 0;
    left:0;
    background-color: rgba(0, 0, 0, 0.2);
    display:flex;
    justify-content:center;
    align-items:center;
`

const PleaseLoggin = styled.article`
    height:200px;
    width:400px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color: white;
    border-radius:8px;
    border: 1px solid rgba(var(--ca6,219,219,219),1);
`
const LogginMessage = styled.p`
    font-size:22px;
    font-weight:500px;
    margin-bottom:40px;
`

const Modal = () => {
  
    return(
        <ModalContainer>
            <PleaseLoggin>
                <LogginMessage>
                    Por favor, inicia sesión
                </LogginMessage>
                <LogginButton text="Iniciar Sesión" from="modal"/>
            </PleaseLoggin>
        </ModalContainer>
    )
}

export default Modal;