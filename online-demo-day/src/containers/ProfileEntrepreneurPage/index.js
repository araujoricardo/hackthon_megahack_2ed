import React from 'react';
import {ProfilePageWrapper, ProfileSideBar, ContentWrapper, PropertyWrapper} from "./style";
import CardProfileSideBar from "../../components/CardProfileSideBar"
import CardEntrepreneurProperty from "../../components/CardEntrepreneurProperty"

class ProfileEntrepreneurPage extends React.Component{



render(){
    return(
        <ProfilePageWrapper>
            PERFIL DO EMPREENDEDOR
            <ProfileSideBar>
                <CardProfileSideBar/>
            </ProfileSideBar>

            <ContentWrapper>
                CONTEUDO    
            </ContentWrapper>            

            <PropertyWrapper>
                <CardEntrepreneurProperty/>
            </PropertyWrapper>

        </ProfilePageWrapper>
    )
}




}

export default ProfileEntrepreneurPage;