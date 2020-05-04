import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';


export const Wrapper = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 20% 1fr;
`

export const TitleWrapper = styled.div`
    grid-row: 1;
`

export const ContactWrapper = styled.div`
    grid-row: 2;
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
    width: 100%;
    justify-self: center;
    background: rgba(196, 196, 196, 0.38);
    border-radius: 10px;
    padding: 30px;
`

export const Title = styled(Typography)`
    &&{
        margin-top: 30px;
        color: #12A2F4;
    }
`

export const DiogoContactWrapper = styled.div`
    grid-column: 1;
    background: rgba(196, 196, 196, 0.38);
    border-radius: 10px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 10%;
    justify-content: center;
`


export const IcaroContactWrapper = styled.div`
    grid-column: 2;
    background: rgba(196, 196, 196, 0.38);
    border-radius: 10px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 10%;
    justify-content: center;
`

export const RicardoContactWrapper = styled.div`
    grid-column: 3;
    background: rgba(196, 196, 196, 0.38);
    border-radius: 10px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 10%;
    justify-content: center;
`

export const LorenzoContactWrapper = styled.div`
    grid-column: 4;
    background: rgba(196, 196, 196, 0.38);
    border-radius: 10px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 10%;
    justify-content: center;
`

export const IgorContactWrapper = styled.div`
    grid-column: 5;
    background: rgba(196, 196, 196, 0.38);
    border-radius: 10px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 10%;
    justify-content: center;
`

export const PersonPicture = styled(Avatar)`
    grid-row: 1/3;
    margin: 10px auto;
    &&{
        height: 6em;
        width: 6em;
    }
`

export const PersonName = styled(Typography)`
    grid-row: 3;
`

export const SocialMediaWrapper = styled.div`
    grid-row: 4;
`

export const GitHubButton = styled(IconButton)`
    &&{
        color: black;
    }
`

export const LinkedInButton = styled(IconButton)`
    &&{
        color: black;
    }
`