import React from "react";
import { AboutWrapper, LogoWrapper,TopBottonWrapper, ContentWrapper, ContentText,
         Logo, ButtonTop  } from "./style";
import logoImg from "../../images/logo.png"
import { push } from "connected-react-router";
import {connect} from "react-redux";
import {routes} from "../Router";


class AboutPage extends React.Component{
    
    render(){
        const{goToLoginPage, goToHomePage}=this.props

        return(
            <AboutWrapper>
                <LogoWrapper>
                    <Logo src={logoImg} onClick={goToHomePage}/>
                </LogoWrapper>

                <TopBottonWrapper>
                    <ButtonTop color="primary" onClick={goToLoginPage}>LOGIN</ButtonTop>
                    <ButtonTop color="primary">SOBRE NÓS</ButtonTop>
                    <ButtonTop color="primary">PLANOS</ButtonTop>
                    <ButtonTop color="primary">CONTATO</ButtonTop>
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
        goToHomePage: () => dispatch(push(routes.root))
    }
}


export default connect (null, mapDispatchToProps) (AboutPage);