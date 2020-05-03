import React from "react";
import {CardFeedWrapper, LogoWrapper, TitleWrapper, TagWrapper, DescriptionWrapper, 
        VideoWrapper, VoteWrapper, InfoBotton, Logo, Thumbnail, LikeButton, ShareButton} from "./style";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";


export default function CardFeed(props){
    return(
        <CardFeedWrapper>
            <LogoWrapper>
                <Logo src={props.logoImg}/>
            </LogoWrapper>
            <TitleWrapper><b>{props.title}</b></TitleWrapper>
            <DescriptionWrapper>{props.description}</DescriptionWrapper>
            <VideoWrapper>
                <Thumbnail src={props.thumbnail}/>
            </VideoWrapper>
            <TagWrapper>
                <Typography color="textSecondary"><i>{props.tags}</i></Typography>
            </TagWrapper>
            <VoteWrapper>
                <p>{props.votes}</p>
                <LikeButton/>
                <ShareButton/>
            </VoteWrapper>
            <InfoBotton>
                <Button variant="contained" color="primary">SAIBA MAIS</Button>
            </InfoBotton>
        </CardFeedWrapper>
    )

}