import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const LoginPageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 12% 100px 1fr;
    grid-template-columns: 1fr 1fr;
    font-family: Roboto;
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

export const PaperLogin = styled(Paper)`
    padding: 20px;
    width:400px;
`

export const LoginWrapper = styled.form`
    text-align: center;
    gap: 10px;
    place-content: center;
    justify-items: center;
    display: grid;
`;

export const LoginInput = styled(TextField)`
    width: 300px;
`

export const PasswordInput = styled(TextField)`
    width: 300px;
`

export const ButtonLogin = styled(Button)`
&&{
    background-color: #12A2F4;
    border-radius: 10px;
    font-weight: 500;
    font-size: 30px;
    color: #E5E5E5;

}  
`

export const CheckboxWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const LoginH1 = styled.h1`
    text-align: center;
`

export const LogoWrapper = styled.div`
    display:flex;
    align-items:center;
    margin-left: 60px;
    grid-column: 1;
`

export const Logo = styled.img`
    height: 80%;
    cursor: pointer;
`

export const GoBackIcon = styled(ArrowBackIcon)`
    cursor: pointer;
`