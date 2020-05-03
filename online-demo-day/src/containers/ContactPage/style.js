import styled from "styled-components";
import Typography from '@material-ui/core/Typography'


export const ContactPageWrapper = styled.div`
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
    height: 30px;
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

