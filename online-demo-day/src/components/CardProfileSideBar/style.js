import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const ProfileSideBarWrapper = styled.div`
    display:grid;
    grid-template-rows: 3fr 4fr 1fr;
    justify-items: center;
    font-family: Roboto;
    color: white;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
`

export const PictureWrapper = styled.div`
    border-top: 1px solid white;
    border-bottom: 1px solid white; 
    width: 90%;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

export const ProfilePicture = styled.img`
    height:164px;
    width:164px;
    border-radius: 50%;
`

export const LinksWrapper = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    text-align: left;
`

export const TextWrapper = styled(Button)`
&&{
    display: flex;
    justify-content: flex-start;
    color: white;
    font-size: 18px;
}
    
`

export const LogoutWrapper = styled.div`
    border-top: 1px solid white;
    width: 90%;
    display:flex;
    justify-content: center;
    align-items: flex-end;
`

export const LogoutButton = styled(Button)`
&&{
    background-color: #12A2F4;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.46);
    border-radius: 10px;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    color: #E5E5E5;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.35);
}
`

export const TextButton = styled.p`
    margin-left: 10px;
`