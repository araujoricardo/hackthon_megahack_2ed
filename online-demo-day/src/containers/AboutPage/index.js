import React from "react";
import { AboutWrapper, LogoWrapper,TopBottonWrapper, ContentWrapper, ContentText,
         Logo, ButtonTop  } from "./style";
import logoImg from "../../images/logo.png"
import { push } from "connected-react-router";
import {connect} from "react-redux";
import {routes} from "../Router";


class AboutPage extends React.Component{
    
    render(){
        const{goToLoginPage, goToHomePage, goToErrorPage, goToContactPage}=this.props

        return(
            <AboutWrapper>
                <LogoWrapper>
                    <Logo src={logoImg} onClick={goToHomePage}/>
                </LogoWrapper>

                <TopBottonWrapper>
                    <ButtonTop color="primary" onClick={goToLoginPage}>LOGIN</ButtonTop>
                    <ButtonTop color="primary">SOBRE NÓS</ButtonTop>
                    <ButtonTop color="primary" onClick={goToErrorPage}>PLANOS</ButtonTop>
                    <ButtonTop color="primary" onClick={goToContactPage}>CONTATO</ButtonTop>
                </TopBottonWrapper>

                <ContentWrapper>
                    <ContentText variant="p">SOBRE NÓS</ContentText>
                </ContentWrapper>

              
             </AboutWrapper>
        )
    }

}

const mapDispatchToProps = dispatch =>{
    return{
        goToLoginPage: () => dispatch(push(routes.login)),
        goToHomePage: () => dispatch(push(routes.root)),
        goToErrorPage: () => dispatch(push(routes.errorpage)),
        goToContactPage: () => dispatch(push(routes.contactpage))
    }
}


export default connect (null, mapDispatchToProps) (AboutPage);