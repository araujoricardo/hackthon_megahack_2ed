import styled from "styled-components";

export const MiniCardWrapper = styled.div`
    display:grid;
    grid-gap: 10px;
    justify-items: center;

    &&{
        color:white;
    }
`

export const PictureWrapper = styled.div`
    border-bottom: 1px solid white; 
    width: 90%;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0 15px 15px 15px;
`

export const ProfilePicture = styled.img`
    height:50px;
    width:50px;
    border-radius: 50%;
`