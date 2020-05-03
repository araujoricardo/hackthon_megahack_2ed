import React from 'react'
import {RankingWrapper, InfoWrapper, SetorWrapper, EmpresaWrapper, VotosWrapper, PlaceWrapper, 
        PlaceText, SetorText, EmpresaText, VotosText} from './style'

function CardRanking(props) {
    return(
        <RankingWrapper>
            <InfoWrapper>
                <SetorWrapper>
                    <SetorText>Setor: </SetorText>
                </SetorWrapper>
                <EmpresaWrapper>
                    <EmpresaText>Empresa: </EmpresaText>
                </EmpresaWrapper>
                <VotosWrapper>
                    <VotosText>Votos: </VotosText>
                </VotosWrapper>
            </InfoWrapper>
            <PlaceWrapper>
                <PlaceText>1°</PlaceText>
            </PlaceWrapper>
        </RankingWrapper>
    )
};

export default CardRanking