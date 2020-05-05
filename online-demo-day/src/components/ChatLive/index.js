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
                <MessagesText variant="body1"><b>Ricardo</b>: Assistir Demo Day de casa é inovador</MessagesText>
                <MessagesText variant="body1"><b>Icaro</b>: Vou ver mais informações no perfil</MessagesText>
                <MessagesText variant="body1"><b>Lorenzo</b>: Estou pensando em investir</MessagesText>
                <MessagesText variant="body1"><b>Lorenzo</b>: Este produto parece promissor</MessagesText>
                <MessagesText variant="body1"><b>Diogo</b>: Design inovador</MessagesText>
                <MessagesText variant="body1"><b>Igor</b>: Gostaria de saber mais sobre a robustes técnica</MessagesText>
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