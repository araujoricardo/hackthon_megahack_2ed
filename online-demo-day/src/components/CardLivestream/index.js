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
                <Typography variant="h4">Apresentação de ideias para o mercado tecnológico.</Typography>
                <br/>
                <Typography variant="body1">Neste video iremos apresentar todo o conteúdo e ideia de um projeto para o ramo da tecnologia, com o intuito de buscar inovação neste mercado.</Typography>
            </LiveStreamDescriptionWrapper>
            
        </LiveStreamWrapper>
    )

}