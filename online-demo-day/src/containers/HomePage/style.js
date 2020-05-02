import styled from "styled-components";
import Button from '@material-ui/core/Button';


export const HomePageWrapper = styled.div`
    position: absolute;
    height: 100%;
    width:100%;
    display: grid;
    grid-template-rows: 12% 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;

`

export const LogoWrapper = styled.div`
    display:flex;
    align-items:center;
    margin-left: 60px;
    grid-column: 1;
`

export const Logo = styled.img`
    height: 30px;
`

export const TopBottonWrapper = styled.div`
    width:100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    grid-column:2;
`

export const ButtonTop = styled(Button)`
&&{
    color: white;
    height: 35px;
    
    :hover{
        color: #28a4ea;
        background-color: white;
    };
}
`

export const ContentWrapper = styled.div`
    grid-row: 4;
    grid-column:2;
    text-align:right;
    margin: 60px;
`

export const ContentText = styled.p`
    color: white;
`

export const SignUpWrapper = styled.div`
    grid-row:5;
    grid-column:2;
    text-align: center;
`

export const SignUpButton = styled(Button)`
&&{
    color: white;
    background-color: #28a4ea;
    padding: 10px 20px;
    
    :hover{
        background-color: #28a4ea;
    }
}
`