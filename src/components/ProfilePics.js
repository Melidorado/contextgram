import styled from 'styled-components';
import Pic from './Pic';

const PicsContainer = styled.section`
    width: 975px;
    display:flex;
    flex-wrap:wrap;
    margin-top: 30px;
`

const ProfilePics = ({feedsource}) => {
    return(
        <PicsContainer>
            {feedsource.map(publication => 
                <Pic 
                photo={publication.source}
                key={publication.id}
                likes={publication.likes}
                ></Pic>)}
        </PicsContainer>
    )
}

export default ProfilePics;