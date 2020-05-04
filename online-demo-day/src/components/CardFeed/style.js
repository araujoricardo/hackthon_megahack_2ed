import styled from "styled-components";
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';


export const CardFeedWrapper = styled.div`
    height: 250px;
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-rows:  5fr 5fr 3fr;
    grid-template-columns: repeat(3, 1fr);
    background-color: #dbe2f2;
    margin-top: 30px;
    border-radius: 10px;
    font-family: Roboto;
`

export const VideoWrapper = styled.div`
    grid-column:1;
    grid-row: 1 / 3;
    display:flex;
    align-items: center;
    justify-content: center;
`

export const TitleWrapper = styled.div`
    margin-bottom: 20px;
    grid-column:2;
    grid-row:1;
    display:flex;
    align-items:flex-end;
    margin-left: 20px;
`


export const LogoWrapper = styled.div`
    grid-column:3;
    grid-row:1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
`

export const DescriptionWrapper = styled.div`
    margin-top: 10px;
    grid-column: 2 / 4;
    grid-row: 2;
    margin-right: 20px;
    text-align: justify;
    margin-left: 20px;
`

export const TagWrapper = styled.div`
    grid-row:3;
    grid-column:2;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
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
    justify-content: flex-end;
    margin-right: 20px;
`

export const Logo = styled.img`
    height: 50px;
`

export const Thumbnail = styled.iframe`
    height: 100%;
    width: 100%;
    margin-left: 10px;
    margin-top: 10px;
`

export const LikeButton = styled(FavoriteIcon)`
    margin-left: 3px;
`

export const ShareButton = styled(ShareIcon)`
    margin-left: 20px;
`