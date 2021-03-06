import styled from 'styled-components';
import ProfileInfo from './ProfileInfo';
import ProfilePics from './ProfilePics';

const feedsource = [
    {
      source: 'https://www.viajejet.com/wp-content/viajes/una-laguna-unica-en-jamaica-650x366.jpg',
      likes: '43',
      comments: '3',
      id: 0,
    },
    {
      source: 'https://www.viajejet.com/wp-content/viajes/los-arrecifes-de-coral-de-bunaken-indonesia-650x366.jpg',
      likes: '313',
      comments: '10',
      id: 1,
    },
    {
      source: 'https://www.viajejet.com/wp-content/viajes/paisaje-nevado-en-el-parque-nacional-deogyusan-corea-del-sur-650x366.jpg',
      likes: '29',
      comments: '2',
      id: 2,
    },
    {
      source: 'https://www.viajejet.com/wp-content/viajes/un-paisaje-de-vertigo-en-ronda-malaga-espana-650x366.jpg',
      likes: '18',
      comments: '2',
      id: 3,
    },
    {
      source: 'https://www.viajejet.com/wp-content/viajes/El-increible-paisaje-de-Semuc-Champey-Guatemala-650x366.jpg',
      likes: '30',
      comments: '4',
      id: 4,
    },
  ];


const ProfileContainer = styled.section`
    width:100vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color: rgba(var(--b3f,250,250,250),1);

`

const Main = () => {
    return(
        <ProfileContainer>
            <ProfileInfo></ProfileInfo>
            <ProfilePics
            feedsource={feedsource}></ProfilePics>
        </ProfileContainer>
    )
}

export default Main;