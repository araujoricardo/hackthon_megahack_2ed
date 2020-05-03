import styled from 'styled-components'

export const RankingWrapper = styled.div`
    color: white;
    display: grid;
    font-family: Roboto;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid white;
    width: 90%;
    margin: 0 auto;
    font-size: 15px;
`

export const InfoWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column: 1;
    margin-left: 10px;
    align-items: center;
`

export const PlaceWrapper = styled.div`
    grid-column: 2;
    display: grid;
    align-items: center;
    justify-content: flex-end;
    margin-right: 10px;
`

export const PlaceText = styled.h3`
    font-size: 3.5em;
    font-weight: 500;
    margin: 0;
`

export const SetorText = styled.p`
    margin: 0;
`

export const EmpresaText = styled.p`
    font-size: 1.3em;
    margin: 0;
`

export const VotosText = styled.p`
    margin: 0;
`


export const SetorWrapper = styled.div`
    grid-row: 1;
`

export const EmpresaWrapper = styled.div`
    grid-row: 2;
`

export const VotosWrapper = styled.div`
    grid-row: 3;
`