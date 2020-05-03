import React from "react";
import {CardFeedWrapper, LogoWrapper, TitleWrapper, TagWrapper, DescriptionWrapper, 
        VideoWrapper, VoteWrapper, InfoBotton, Logo, Thumbnail} from "./style";
import Button from "@material-ui/core/Button";
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';


export default function CardFeed(props){
    return(
        <CardFeedWrapper>
            <LogoWrapper>
                <Logo src={props.logoImg}/>
            </LogoWrapper>

            <TitleWrapper>{props.title}</TitleWrapper>
            <DescriptionWrapper>{props.description}</DescriptionWrapper>
            <VideoWrapper>
                <Thumbnail src={props.thumbnail}/>
            </VideoWrapper>
            <TagWrapper>TAG</TagWrapper>
            <VoteWrapper>
                <p>{props.votes}</p>
                <FavoriteIcon/>
                <ShareIcon/>
            </VoteWrapper>
            <InfoBotton>
                <Button variant="contained" color="primary">SAIBA MAIS</Button>
            </InfoBotton>
        </CardFeedWrapper>
    )

}