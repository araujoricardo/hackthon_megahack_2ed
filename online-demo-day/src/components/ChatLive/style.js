import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography'

export const ChatWrapper = styled.div`
    display: grid;
    grid-template-rows: 12% 1fr 10%;
    height: 100%;
    width: 100%;
    justify-items: center;
    gap: 10px;
`

export const RoomWrapper = styled(Paper)`
    grid-row: 1;
    width: 90%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 50% 50%;
    &&{
        background: #DEE7F1;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 10px;
    }
    
`

export const ButtonChat = styled(Button)`
    grid-row: 1;
    display: flex;
    &&{
        background: #9BCEEA;
        border-radius: 5px;
        height: 90%;
        width: 90%;
    }
`

export const ButtonAnswer = styled(Button)`
    grid-row: 2;
    &&{
        background: #12A2F4;
        border-radius: 5px;
        height: 90%;
        width: 90%;
    }
`

export const MessagesWrapper = styled.div`
    grid-row: 2;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    width: 90%;
    display: flex;
    flex-direction: column-reverse;
`

export const MessagesText = styled(Typography)`
    &&{
        margin-left: 10px;
        margin-bottom: 10px;
    }
`

export const InputMessageWrapper = styled.div`
    grid-row: 3;
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-columns: 90% 10%;
    justify-content: space-between;
    align-items: center;
    background: #DEE7F1;
    border-radius: 5px;
`

export const InputMessage = styled(TextField)`
    grid-column: 1;
    &&{
        margin-left: 10px;
    }
`

export const ButtonSendWrapper = styled(IconButton)`
    grid-column: 2;
    display: flex;
    &&{
    }
`