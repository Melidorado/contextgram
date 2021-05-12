import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farFaHeart} from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../contexts/UserContext';
import { useContext, useState } from 'react';
import Modal from './Modal';

const ImageContainer = styled.div`
    width:293px;
    height:293px;
    overflow:hidden;
`
const Photo = styled.img`
    height:100%;
`

const Card = styled.article`
    width:293px;
    height: 320px;
    display:flex;
    flex-direction:column;
    margin-left:28px;
    margin-bottom: 28px;
`
const Likes = styled.div`
    display:flex;
    width:100%;
    margin-top:10px;
`
const Number = styled.span`
    font-weight:600;
    font-size:16px;
`
const Item = styled.p`
    font-size:16px;
    margin-left: 15px;
`

const Pic = ({photo, likes}) => {
    const { loggin } = useContext(UserContext)
    const { showModal } = useContext(UserContext)
    const { saveDoNotShowModal } = useContext(UserContext)

    const [ totalLikes, setTotalLikes ] = useState(likes)
    const [ like, setLike ] = useState(false)

    const handleClickLike = () => {
        setTotalLikes(parseInt(totalLikes) + 1)
        setLike(true)
    }

    const handleClickDislike = () => {
        setTotalLikes(parseInt(totalLikes) - 1)
        setLike(false)
    }

    const handleClickLoggin = () => {
        saveDoNotShowModal(false)
    }

    return(
        <Card>
            <ImageContainer>
                <Photo src={photo}/>
            </ImageContainer>
            <Likes>
            {   like 
                ?<FontAwesomeIcon 
                color="red"
                icon={fasFaHeart}
                onClick={handleClickDislike}
                ></FontAwesomeIcon>
                :<FontAwesomeIcon 
                icon={farFaHeart}
                onClick={loggin ?handleClickLike :handleClickLoggin}
                ></FontAwesomeIcon>
                }
            {loggin && <Item><Number>{totalLikes}</Number> likes</Item>}
            </Likes>
            {!showModal && <Modal></Modal>}
        </Card>
    )
}

export default Pic;