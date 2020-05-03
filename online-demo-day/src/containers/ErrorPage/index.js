import React from "react";
import {connect} from "react-redux"
import { goBack ,push} from "connected-react-router";
import {ErrorPageWrapper, LogoWrapper,TopBottonWrapper, ContentWrapper, ContentText,
    Logo, ButtonTop  } from "./style";
import logoImg from "../../images/logo.png";
import {routes} from "../Router";
import Header from "../Header";

class ErrorPage extends React.Component{

    render(){
        const {goBack, goToHomePage}=this.props

        return(
            <ErrorPageWrapper>
                 <LogoWrapper>
                    <Logo src={logoImg} onClick={goToHomePage}/>
                </LogoWrapper>

                <TopBottonWrapper>                    
                    <Header/>
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
    }
}

export default connect (null, mapDispatchToProps) (ErrorPage); 