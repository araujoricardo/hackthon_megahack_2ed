import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';


export const LivePageWrapper = styled.div`
    height:100%;
    width:100%;
    display:grid;
    grid-template-rows: 12% 1fr;
    grid-template-columns: 20% 1fr 30%;
    font-family: Roboto;
`

export const LogoWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    grid-column: 1;
`

export const SearchWrapper = styled.div`
    grid-row: 1;
    grid-column: 2;
    width: 90%;
    height: 50%;
    margin: 10px 0 10px 0;
    display: grid;
    grid-template-columns: 90% 10%;
    justify-content: space-between;
    justify-self: center;
    align-self: center;
    border-radius: 10px;
    background-color: white;
`

export const InputSearch = styled(TextField)`
    grid-column: 1;
    &&{
        margin-left: 10px;
    }
`
export const ButtonSearchWrapper = styled(IconButton)`
    grid-column: 2;
    display: flex;
    &&{
    }
`

export const TitleChatWrapper = styled.div`
    grid-row: 1;
    grid-column: 3;
    text-align: center;
    align-self: center;
    color: white;
`

export const TitleChat = styled.h3`
    font-size: 3em;
`

export const Logo = styled.img`
    height: 80%;
    cursor: pointer;
`

export const ProfileSideBar = styled.div`
    grid-row:2;
    grid-column:1;
`

export const ContentWrapper = styled.div`
    grid-row:2;
    grid-column:2;
    background-color: white;
    height:100%;
    width:100%;
    justify-content: center;
    border-radius: 25px;
`

export const ChatWrapper = styled.div`
    grid-row:2;
    grid-column:3;
    height: 100%;
    width: 100%;
`