import styled from "styled-components";
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography'


export const HomePageWrapper = styled.div`
    position: absolute;
    height: 100%;
    width:100%;
    display: grid;
    grid-template-rows: 12% 1fr 1fr 1fr 1fr;
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
    height: 80%;
`

export const TopBottonWrapper = styled.div`
    width:100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    grid-column:2;
`

export const ContentWrapper = styled.div`
    grid-row: 4;
    grid-column:2;
    text-align:right;
    margin-right: 100px;
`

export const ContentText = styled(Typography)`
&&{
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 55px;
    color: #FFFFFF;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.53);
}
    
`

export const SignUpWrapper = styled.div`
    grid-row:5;
    grid-column:2;
    text-align: center;
`

export const SignUpButton = styled(Button)`
&&{
    background-color: #12A2F4;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.46);
    border-radius: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 37px;
    color: #E5E5E5;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.35);
}
`