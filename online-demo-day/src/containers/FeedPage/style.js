import styled from "styled-components";


export const FeedPageWrapper = styled.div`
    height:100%;
    width:100%;
    display:grid;
    grid-template-rows: 12% 1fr;
    grid-template-columns: 20% 1fr 30%;
`

export const LogoWrapper = styled.div`
    display:flex;
    align-items:center;
    margin-left: 60px;
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
    background-color: yellow;
`

export const RankingWrapper = styled.div`
    grid-row:2;
    grid-column:3;
`