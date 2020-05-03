import React from "react";
import {connect} from "react-redux"
import {routes} from "../Router";
import { goBack, push } from "connected-react-router";
import { ContactPageWrapper, LogoWrapper,TopBottonWrapper, ContentWrapper, ContentText,
        Logo, ButtonTop  } from "./style";
import logoImg from "../../images/logo.png"

class ContactPage extends React.Component{

    render(){
        const {goBack, goToLoginPage, goToHomePage, goToErrorPage, goToAboutPage}=this.props
        return(
            <ContactPageWrapper>
                <LogoWrapper>
                    <Logo src={logoImg} onClick={goToHomePage}/>
                </LogoWrapper>

                <TopBottonWrapper>
                    <ButtonTop color="primary" onClick={goToLoginPage}>LOGIN</ButtonTop>
                    <ButtonTop color="primary" onClick={goToAboutPage}>SOBRE NÓS</ButtonTop>
                    <ButtonTop color="primary" onClick={goToErrorPage}>PLANOS</ButtonTop>
                    <ButtonTop color="primary">CONTATO</ButtonTop>
                </TopBottonWrapper>
            
                <ContentWrapper>
                    <ContentText variant="p">Informações de contato aqui!</ContentText>
                    <button onClick={goBack}>VOLTAR</button>
                </ContentWrapper>
            
            </ContactPageWrapper>
        )

    }

}

const mapDispatchToProps = dispatch =>{
    return{
        goBack: () => dispatch(goBack()),
        goToHomePage: () => dispatch(push(routes.root)),
        goToLoginPage: () => dispatch(push(routes.login)),
        goToAboutPage:() => dispatch(push(routes.about)),
        goToErrorPage: () => dispatch(push(routes.errorpage)),
        goToContactPage: () => dispatch(push(routes.contactpage))
    }
}

export default connect (null, mapDispatchToProps) (ContactPage);