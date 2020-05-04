import React from "react";
import {ChatWrapper, RoomWrapper, MessagesWrapper, InputMessageWrapper, ButtonChat, ButtonAnswer, InputMessage,
        ButtonSendWrapper, MessagesText} from './style'
import SendIcon from '@material-ui/icons/Send';


export default function ChatLive(props){
    return(
        <ChatWrapper>
            <RoomWrapper>
                <ButtonChat color="primary" variant="contained" disableElevation>Chat público</ButtonChat>
                <ButtonAnswer color="primary" variant="contained" disableElevation>Fale com o palestrante</ButtonAnswer>
            </RoomWrapper>
            <MessagesWrapper>
                <MessagesText variant="body1"><b>Icaro</b>: </MessagesText>
                <MessagesText variant="body1"><b>Ricardo</b>: Qualquer coisa</MessagesText>
            </MessagesWrapper>
            <InputMessageWrapper>
                <InputMessage variant="outlined" label="Digite uma mensagem"></InputMessage>
                <ButtonSendWrapper aria-label="Enviar mensagem">
                    <SendIcon></SendIcon>
                </ButtonSendWrapper>
            </InputMessageWrapper>
        </ChatWrapper>
    )

}