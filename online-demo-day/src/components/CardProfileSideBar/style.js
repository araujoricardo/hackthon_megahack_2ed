import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';

export const ProfileSideBarWrapper = styled.div`
    display:grid;
    grid-template-rows: 3fr 4fr 1fr;
    justify-items: center;
    font-family: Roboto;
    color: white;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    height:100%;
`

export const PictureWrapper = styled.div`
    border-top: 1px solid white;
    border-bottom: 1px solid white; 
    width: 90%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
`

export const ProfilePicture = styled(Avatar)`
    &&{
        height:124px;
        width:124px;
        background-color: #12A2F4;
        font-size: 1.5em;
    }
    
`

export const LinksWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    width: 90%;
    flex-direction: column;
    text-align: left;
`

export const ButtonWrapper = styled(Button)`
&&{
    display: flex;
    justify-content: flex-start;
    color: white;
}
`

export const LogoutWrapper = styled.div`
    border-top: 1px solid white;
    width: 90%;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const LogoutButton = styled(Button)`
&&{
    background-color: #12A2F4;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.46);
    border-radius: 10px;
    font-style: normal;
    font-weight: 500;
    color: #E5E5E5;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.35);
}
`

export const TextButton = styled(Typography)`
    
    &&{
        color: white;
        margin-left: 10px;
        font-size: 1.3em;
    }
`

export const TextName = styled(Typography)`
    &&{
        color: white;
        font-size: 1.3em;
    }
`

export const TextButtonLogout = styled(TextName)`

`