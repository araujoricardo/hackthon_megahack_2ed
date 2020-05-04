import React from "react";
import {PropertyWrapper, TextWrapper, PropertyText} from "./style"

export default function CardEntrepreneurProperty(props){
    return(
        <PropertyWrapper>
            <TextWrapper>
                <PropertyText color="primary" onClick={props.onClickAboutUs}>Sobre nós</PropertyText>
            </TextWrapper>
            <TextWrapper>
                <PropertyText color="primary" onClick={props.onClickTeam}>Equipe</PropertyText>
            </TextWrapper>
            <TextWrapper>
                <PropertyText color="primary" onClick={props.onClickProject}>Projeto</PropertyText>
            </TextWrapper>
            <TextWrapper>
                <PropertyText color="primary" onClick={props.onClickSchedule}>Agenda</PropertyText>
            </TextWrapper>
        </PropertyWrapper>
    )
}