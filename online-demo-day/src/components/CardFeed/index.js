import React from "react";
import {CardFeedWrapper, LogoWrapper, TitleWrapper, TagWrapper, DescProblemWrapper, TextIdeaWrapper, VideoWrapper, VoteWrapper, InfoWrapper} from "./style";


export default function CardFeed(props){
    return(
        <CardFeedWrapper>
            <LogoWrapper>logo</LogoWrapper>
            <TitleWrapper>TITULO</TitleWrapper>
            <TagWrapper>TAG</TagWrapper>
            <DescProblemWrapper>DESCRIÇÃO</DescProblemWrapper>
            <TextIdeaWrapper>PROPOSTA</TextIdeaWrapper>
            <VideoWrapper>VIDEO</VideoWrapper>
            <VoteWrapper>VOTES</VoteWrapper>
            <InfoWrapper>INFORMAÇÕES</InfoWrapper>
        </CardFeedWrapper>
    )

}