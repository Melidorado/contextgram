import styled from 'styled-components';
import profile from '../1.jpg';

const Profile = styled.header`
    width: 975px;
    display:flex;
    padding: 30px 0;
    border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);

`
const Image = styled.div`
    width:30%;
    height:150px;
    margin-right:40px;
    display:flex;
    justify-content:center;

`
const IMageContainer = styled.div`
    background-color: rgba(var(--b3f,250,250,250),1);
    border-radius: 50%;
    overflow:hidden;
    height: 100%;
    width:150px;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
`
const ProfilePicture = styled.img`
    width:100%;
`
const Info = styled.section`
    width:60%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:flex-start;;
`
const UserName = styled.p`
    font-size: 28px;
`
const Name = styled.p`
    font-weight:600;
    font-size:16px;
`
const Followers = styled.div`
    display:flex;
`
const Number = styled.span`
    font-weight:600;
    font-size:16px;
`
const Item = styled.p`
    font-size:16px;
    margin-right: 15px;
`

const ProfileInfo = () => {
    return(
        <Profile>
            <Image>
                <IMageContainer>
                    <ProfilePicture src={profile}/>
                </IMageContainer>
            </Image>
            <Info>
                <UserName>meliidorado</UserName>
                <Followers>
                    <Item><Number>300</Number> publicaciones</Item>
                    <Item><Number>1020</Number> seguidores</Item>
                    <Item><Number>951</Number> seguidos</Item>
                </Followers>
                <Name>melissa</Name>
            </Info>
        </Profile>
    )
}

export default ProfileInfo;