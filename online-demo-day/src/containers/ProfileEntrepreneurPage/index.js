import React from 'react';
import {ProfilePageWrapper, ProfileSideBar, ContentWrapper, PropertyWrapper, LogoWrapper, Logo} from "./style";
import CardProfileSideBar from "../../components/CardProfileSideBar"
import CardEntrepreneurProperty from "../../components/CardEntrepreneurProperty"
import logoImg from "../../images/logo.png"


class ProfileEntrepreneurPage extends React.Component{



render(){
    return(
        <ProfilePageWrapper>

            <LogoWrapper>
                <Logo src={logoImg}/>
            </LogoWrapper>
            
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