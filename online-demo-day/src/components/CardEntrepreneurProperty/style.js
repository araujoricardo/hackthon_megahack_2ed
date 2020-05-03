import styled from "styled-components";
import { Typography } from "@material-ui/core";


export const PropertyWrapper = styled.div`
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    height: 80px;
    width: 90%;
`

export const TextWrapper = styled.div`
    display:grid;
    height:100%;
    align-items: center;
    margin-left: 30px;
`

export const PropertyText = styled(Typography)`
&&{
    color: white;
}
`