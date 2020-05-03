import React from "react";
import {connect} from "react-redux"
import { goBack ,push} from "connected-react-router";
import {ErrorPageWrapper, LogoWrapper,TopBottonWrapper, ContentWrapper, ContentText,
    Logo, ButtonTop  } from "./style";
import logoImg from "../../images/logo.png";
import {routes} from "../Router";


class ErrorPage extends React.Component{

    render(){
        const {goBack, goToLoginPage, goToHomePage, goToContactPage, goToAboutPage}=this.props

        return(
            <ErrorPageWrapper>
                 <LogoWrapper>
                    <Logo src={logoImg} onClick={goToHomePage}/>
                </LogoWrapper>

                <TopBottonWrapper>
                    {/* //estou fazendo em ordem alfabética, parei aqui */}
                    
                    <ButtonTop color="primary" onClick={goToLoginPage}>LOGIN</ButtonTop>
                    <ButtonTop color="primary" onClick={goToAboutPage}>SOBRE NÓS</ButtonTop>
                    <ButtonTop color="primary">PLANOS</ButtonTop>
                    <ButtonTop color="primary" onClick={goToContactPage}>CONTATO</ButtonTop>
                </TopBottonWrapper>

                <ContentWrapper>
                    <button onClick={goBack}>VOLTAR</button>
                    <ContentText variant="p">Esta página esta em desenvolvimento</ContentText>
                </ContentWrapper>

            </ErrorPageWrapper>
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

export default connect (null, mapDispatchToProps) (ErrorPage); 