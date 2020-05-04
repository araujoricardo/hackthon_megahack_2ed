import React from "react";
import {PropertyWrapper, TextWrapper, PropertyText} from "./style"

export default function CardEntrepreneurProperty(props){
    return(
        <PropertyWrapper>
            <TextWrapper>
                <PropertyText color="primary" isActive={props.isActive}>Sobre nós</PropertyText>
            </TextWrapper>
            <TextWrapper>
                <PropertyText color="primary">Equipe</PropertyText>
            </TextWrapper>
            <TextWrapper>
                <PropertyText color="primary">Projeto</PropertyText>
            </TextWrapper>
            <TextWrapper>
                <PropertyText color="primary">Agenda</PropertyText>
            </TextWrapper>
        </PropertyWrapper>
    )
}