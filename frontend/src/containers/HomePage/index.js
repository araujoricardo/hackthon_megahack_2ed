import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import {HomePageWrapper, SignUpButton, ContentText,
        LogoWrapper, TopBottonWrapper, Logo, ContentWrapper, SignUpWrapper
        } from "./style";
import logoImg from "../../images/logo.png";
import Header from "../Header"


class HomePage extends React.Component{


    render(){
        const {goToSignUpPage} = this.props

        return(
            <HomePageWrapper>
                <LogoWrapper>
                    <Logo src={logoImg}/>
                </LogoWrapper>

                <TopBottonWrapper>
                    <Header/>
                </TopBottonWrapper>

                <ContentWrapper>
                    <ContentText variant="p">Juntos fazemos acontecer!</ContentText>
                </ContentWrapper>

                <SignUpWrapper>
                    <SignUpButton variant="contained" color="primary" onClick={goToSignUpPage}>CADASTRE-SE</SignUpButton>
                </SignUpWrapper>
            </HomePageWrapper>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToSignUpPage: () => dispatch(push(routes.signuppage)),
    }
}


export default connect (null, mapDispatchToProps) (HomePage);