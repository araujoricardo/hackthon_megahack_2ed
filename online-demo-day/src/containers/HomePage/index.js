import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import {HomePageWrapper, ButtonTop, SignUpButton, ContentText,
        LogoWrapper, TopBottonWrapper, Logo, ContentWrapper, SignUpWrapper
        } from "./style";
import logoImg from "../../images/logo.png"


class HomePage extends React.Component{


    render(){
        const {goToLoginPage, goToSignUpPage, goToAboutPage, goToErrorPage, goToContactPage} = this.props

        return(
            <HomePageWrapper>
                <LogoWrapper>
                    <Logo src={logoImg}/>
                </LogoWrapper>

                <TopBottonWrapper>
                    <ButtonTop color="primary" onClick={goToLoginPage}>LOGIN</ButtonTop>
                    <ButtonTop color="primary" onClick={goToAboutPage}>SOBRE NÓS</ButtonTop>
                    <ButtonTop color="primary" onClick={goToErrorPage}>PLANOS</ButtonTop>
                    <ButtonTop color="primary" onClick={goToContactPage}>CONTATO</ButtonTop>
                </TopBottonWrapper>

                <ContentWrapper>
                    <ContentText variant="p">Juntos fazemos acontecer!</ContentText>
                </ContentWrapper>

                <SignUpWrapper>
                    <SignUpButton onClick={goToSignUpPage}>CADASTRE-SE</SignUpButton>
                </SignUpWrapper>
            </HomePageWrapper>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToLoginPage: () => dispatch(push(routes.login)),
        goToSignUpPage: () => dispatch(push(routes.signuppage)),
        goToAboutPage:() => dispatch(push(routes.about)),
        goToErrorPage: () => dispatch(push(routes.errorpage)),
        goToContactPage: () => dispatch(push(routes.contactpage))
    }
}


export default connect (null, mapDispatchToProps) (HomePage);