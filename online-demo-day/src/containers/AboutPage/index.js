import React from "react";
import { AboutWrapper, LogoWrapper,TopBottonWrapper, ContentWrapper, ContentText,
         Logo  } from "./style";
import logoImg from "../../images/logo.png"
import { push } from "connected-react-router";
import {connect} from "react-redux";
import {routes} from "../Router";
import Header from "../Header";


class AboutPage extends React.Component{
    
    render(){
        const{goToHomePage}=this.props

        return(
            <AboutWrapper>
                <LogoWrapper>
                    <Logo src={logoImg} onClick={goToHomePage}/>
                </LogoWrapper>

                <TopBottonWrapper>
                    <Header/>
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
        goToHomePage: () => dispatch(push(routes.root)),
    }
}


export default connect (null, mapDispatchToProps) (AboutPage);