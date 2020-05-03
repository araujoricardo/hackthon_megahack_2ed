import React from 'react';
import { connect } from "react-redux";
import  {routes} from "../Router";
import { push } from "connected-react-router";
import {ProfilePageWrapper, ProfileSideBar, ContentWrapper, PropertyWrapper, LogoWrapper, Logo} from "./style";
import CardProfileSideBar from "../../components/CardProfileSideBar"
import CardEntrepreneurProperty from "../../components/CardEntrepreneurProperty"
import logoImg from "../../images/logo.png"


class ProfileEntrepreneurPage extends React.Component{

    render(){

        const {goToFeedPage, goToEventPage, goToProfileEntrepreneurPage} = this.props;

        return(
            <ProfilePageWrapper>

                <LogoWrapper>
                    <Logo src={logoImg} onClick={goToFeedPage}/>
                </LogoWrapper>
                
                <ProfileSideBar>
                    <CardProfileSideBar
                    events={goToEventPage}
                    profile={goToProfileEntrepreneurPage}/>
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
const mapDispatchToProps = dispatch =>{
    return{
        goToFeedPage: () => dispatch(push(routes.feedpage)),
        goToEventPage: () => dispatch(push(routes.livestream)),
        goToProfileEntrepreneurPage: () => dispatch(push(routes.profileentrepreneurpage))
    }
}

export default connect(null, mapDispatchToProps)(ProfileEntrepreneurPage)