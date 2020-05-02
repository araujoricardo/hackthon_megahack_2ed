import styled from "styled-components";

export const ProfileSideBarWrapper = styled.div`
    display:grid;
    grid-template-rows: 3fr 4fr 1fr;
    justify-items:center;
`


export const PictureWrapper = styled.div`
    border-top: 1px solid white;
    border-bottom: 1px solid white; 
    width: 90%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

export const ProfilePicture = styled.img`
    height:184px;
    width:184px;
    border-radius: 50%;
    padding: 10px;
`

export const LinksWrapper = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    text-align: left;
`

export const TextWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const LogoutWrapper = styled.div`
    border-top: 1px solid white;
    width: 90%;
    display:flex;
    justify-content: center;
    align-items: center;
`