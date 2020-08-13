import styled from "styled-components";
import Button from '@material-ui/core/Button';


export const HeaderWrapper = styled.div`
    width:100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const ButtonTop = styled(Button)`
&&{
    border-radius: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    color: white;

    :hover{
        color: #12A2F4;
        background-color: white;
    };
}
`