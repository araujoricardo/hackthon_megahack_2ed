import styled from "styled-components";


export const CardFeedWrapper = styled.div`
    height: 200px;
    width: 600px;
    display: grid;
    grid-template-rows:  5fr 5fr 3fr;
    grid-template-columns: repeat(3, 1fr);
    background-color: #dbe2f2;
    margin-top: 30px;
    border-radius: 10px;
`

export const VideoWrapper = styled.div`
    grid-column:1;
    grid-row: 1 / 3;
    display:flex;
    align-items: center;
    justify-content: center;
`

export const TitleWrapper = styled.div`
    grid-column:2;
    grid-row:1;
    display:flex;
    align-items:flex-end;
`


export const LogoWrapper = styled.div`
    grid-column:3;
    grid-row:1;
    display:flex;
    align-items: center;
    justify-content: center;
`

export const DescriptionWrapper = styled.div`
    grid-column: 2 / 4;
    grid-row: 2;
`

export const TagWrapper = styled.div`
    grid-row:3;
    grid-column:2;
    display:flex;
    align-items: center;
    justify-content: center;
`

export const VoteWrapper = styled.div`
    grid-row: 3;
    grid-column:1;
    display:flex;
    align-items: center;
    justify-content: center;
`

export const InfoBotton = styled.div`
    grid-row:3;
    grid-column:3;
    display:flex;
    align-items: center;
    justify-content: center;
`

export const Logo = styled.img`
    height: 50px;

`

export const Thumbnail = styled.img`
    height: 120px;
`