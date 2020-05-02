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
        const {goToLoginPage, goToSignUpPage} = this.props

        return(
            <HomePageWrapper>
                <LogoWrapper>
                    <Logo src={logoImg}/>
                </LogoWrapper>

                <TopBottonWrapper>
                    <ButtonTop color="primary" Click={goToLoginPage}>LOGIN</ButtonTop>
                    <ButtonTop color="primary">SOBRE NÓS</ButtonTop>
                    <ButtonTop color="primary">PLANOS</ButtonTop>
                    <ButtonTop color="primary">CONTATO</ButtonTop>
                </TopBottonWrapper>

                <ContentWrapper>
                    <ContentText>Juntos fazemos acontecer!</ContentText>
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
        goToSignUpPage: () =>dispatch(push(routes.signuppage))
    }
}


export default connect (null, mapDispatchToProps) (HomePage);