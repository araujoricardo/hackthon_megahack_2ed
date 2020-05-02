import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const SignUpPageWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 12% 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    font-family: Roboto;
`

export const PaperWrapper = styled(Paper)`
    display: flex;
    grid-column: 2;
    grid-row: 2;
    height: 50%;
`

export const SignUpWrapper = styled.form`
    margin: auto;
    text-align: center;
    gap: 10px;
    place-content: center;
    justify-items: center;
    display: grid;
`;

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

export const GoBackIcon = styled(ArrowBackIcon)`
    cursor: pointer;
`
