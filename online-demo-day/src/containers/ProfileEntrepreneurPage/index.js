import React from 'react';
import { connect } from "react-redux";
import  {routes} from "../Router";
import { push } from "connected-react-router";
import {ProfilePageWrapper, ProfileSideBar, ContentWrapper, PropertyWrapper, LogoWrapper, Logo, InputSearch, 
        ButtonSearchWrapper, SearchWrapper} from "./style";
import CardProfileSideBar from "../../components/CardProfileSideBar"
import CardEntrepreneurProperty from "../../components/CardEntrepreneurProperty"
import logoImg from "../../images/logo.png"
import SearchIcon from '@material-ui/icons/Search';


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
                    events={goToEventPage}/>
                </ProfileSideBar>

                <SearchWrapper>
                    <InputSearch label="Pesquisar..."></InputSearch>
                    <ButtonSearchWrapper><SearchIcon></SearchIcon></ButtonSearchWrapper>
                </SearchWrapper>

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