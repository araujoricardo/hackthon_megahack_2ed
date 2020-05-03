import React from "react";
import {LiveStreamWrapper, LiveStreamContentWrapper, LiveStreamContent, LiveStreamDescriptionWrapper} from "./style";
import Typography from '@material-ui/core/Typography';


export default function CardFeed(props){
    return(
        <LiveStreamWrapper>
            <LiveStreamContentWrapper>
                <LiveStreamContent src="https://www.youtube.com/embed/_AOCfdA9IPo" frameborder="0" allow="accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"></LiveStreamContent>
            </LiveStreamContentWrapper>

            <LiveStreamDescriptionWrapper>
                <Typography variant="h3">Descrição</Typography>
                <Typography variant="body1">{props.description}</Typography>
            </LiveStreamDescriptionWrapper>
            
        </LiveStreamWrapper>
    )

}