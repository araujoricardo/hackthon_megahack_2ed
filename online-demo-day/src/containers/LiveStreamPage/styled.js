import styled from "styled-components";


export const LivePageWrapper = styled.div`
    height:100%;
    width:100%;
    display:grid;
    grid-template-rows: 12% 1fr;
    grid-template-columns: 20% 1fr 30%;
`

export const LogoWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    grid-column: 1;
`

export const Logo = styled.img`
    height: 30px;
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
    overflow-y:scroll;
    display:grid;
    justify-content: center;
    border-radius: 25px;
`

export const ChatWrapper = styled.div`
    grid-row:2;
    grid-column:3;
`