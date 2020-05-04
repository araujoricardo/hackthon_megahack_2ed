import React from 'react'
import {
    RankingWrapper, InfoWrapper, SetorWrapper, EmpresaWrapper, VotosWrapper, PlaceWrapper,
    PlaceText, SetorText, EmpresaText, VotosText
} from './style'

function CardRanking(props) {
    return (
        <RankingWrapper>
            <InfoWrapper>
                <SetorWrapper>
                    <SetorText>Setor: {props.sector}</SetorText>
                </SetorWrapper>
                <EmpresaWrapper>
                    <EmpresaText>Empresa: {props.name}</EmpresaText>
                </EmpresaWrapper>
                <VotosWrapper>
                    <VotosText>Votos: {props.voteNumber}</VotosText>
                </VotosWrapper>
            </InfoWrapper>
            <PlaceWrapper>
                <PlaceText>{props.ranking}°</PlaceText>
            </PlaceWrapper>
        </RankingWrapper>
    )
};

export default CardRanking