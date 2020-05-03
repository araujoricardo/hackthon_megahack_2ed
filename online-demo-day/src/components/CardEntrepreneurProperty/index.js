import React from "react";
import {PropertyWrapper, TextWrapper, PropertyText} from "./style"

export default function CardEntrepreneurProperty(props){
    return(
        <PropertyWrapper>
            <TextWrapper>
                <PropertyText variant="h6">Produto</PropertyText>
            </TextWrapper>
        </PropertyWrapper>
    )
}