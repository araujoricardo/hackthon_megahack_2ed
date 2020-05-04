import styled from "styled-components";
import { Button } from "@material-ui/core";


export const PropertyWrapper = styled.div`
    border-top: 1px solid white;
    height: 80px;
    width: 90%;
`

export const TextWrapper = styled.div`
    display:grid;
    height:100%;
    align-items: center;
    border-bottom: 1px solid white;
`

export const PropertyText = styled(Button)`
&&{
    color: white;
    display: flex;
    justify-content: flex-start;
    font-size: 1.5em;
}
`