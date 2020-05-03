import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const SignUpPageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 12% 100px 1fr;
    grid-template-columns: 1fr 1fr;
    font-family: Roboto;
`

export const LogoWrapper = styled.div`
    display:flex;
    align-items:center;
    margin-left: 60px;
    grid-column: 1;
`

export const Logo = styled.img`
    height: 30px;
    cursor: pointer;
`

export const TopBottonWrapper = styled.div`
    width:100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    grid-column:2;
`

export const PaperWrapper = styled.div`
    grid-column: 2;
    grid-row: 2/4;
    height: 100%;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items:center;
` 

export const BotaoWrapper = styled.div`
    grid-column: 1/3;
    display: flex;
    justify-content: center;
`

export const PaperSignUp = styled(Paper)`
    padding: 20px;
    width:400px;
`

export const SignUpWrapper = styled.form`
    margin: auto;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80%;
    gap: 10px;
`

export const CheckboxWrapper = styled.div`
    display: flex;
    justify-content: center;
    grid-column: 1/3;
`

export const SignUpH1 = styled.h1`
    text-align: center;
`

export const NameInput = styled(TextField)`
    grid-column: 1;
`

export const LastNameInput = styled(TextField)`
    grid-column: 2;
`

export const SignUpInput = styled(TextField)`
    grid-column: 1/3;
`

export const BotaoConfirm = styled(Button)`
&&{
    background-color: #12A2F4;
    border-radius: 10px;
    font-weight: 500;
    font-size: 30px;
    color: #E5E5E5;

    :hover{
        background-color: #466585;
    }
}  
`

export const GoBackIcon = styled(ArrowBackIcon)`
    cursor: pointer;
    float: left;
`
