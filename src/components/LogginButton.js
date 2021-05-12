import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';

const Button = styled.button`
    border: 1px solid rgba(var(--ca6,219,219,219),1);
    background-color: transparent;
    padding:10px;
`

const LogginButton = ({text, from}) => {
    const { saveLoggin } = useContext(UserContext)
    const { loggin } = useContext(UserContext)
    const { saveDoNotShowModal } = useContext(UserContext)

    const handleClick = () => {
        saveDoNotShowModal(true)
        saveLoggin(!loggin)
    }

    return(
        <Button onClick={handleClick}>{text}</Button>
    )
}

export default LogginButton;