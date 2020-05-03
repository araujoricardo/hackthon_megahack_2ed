import React from "react";
import {connect} from "react-redux"
import {routes} from "../Router";
import { goBack, push } from "connected-react-router";
import { ContactPageWrapper, LogoWrapper,TopBottonWrapper, ContentWrapper, ContentText,
        Logo, ButtonTop  } from "./style";
import logoImg from "../../images/logo.png"
import Header from "../Header"

class ContactPage extends React.Component{

    render(){
        const {goBack , goToHomePage}=this.props
        return(
            <ContactPageWrapper>
                <LogoWrapper>
                    <Logo src={logoImg} onClick={goToHomePage}/>
                </LogoWrapper>

                <TopBottonWrapper>
                    <Header/>
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
    }
}

export default connect (null, mapDispatchToProps) (ContactPage);