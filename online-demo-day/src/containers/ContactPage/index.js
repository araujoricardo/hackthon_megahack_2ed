import React from "react";
import {connect} from "react-redux"
import {routes} from "../Router";
import { push } from "connected-react-router";
import { ContactPageWrapper, LogoWrapper,TopBottonWrapper, ContentWrapper, ContentText,
        Logo} from "./style";
import logoImg from "../../images/logo.png";
import Header from "../Header";
import OurContact from '../../components/OurContact';


class ContactPage extends React.Component{

    render(){
        const {goToHomePage}=this.props
        return(
            <ContactPageWrapper>
                <LogoWrapper>
                    <Logo src={logoImg} onClick={goToHomePage}/>
                </LogoWrapper>

                <TopBottonWrapper>
                    <Header/>
                </TopBottonWrapper>
            
                <ContentWrapper>
                    <OurContact/>
                </ContentWrapper>
            
            </ContactPageWrapper>
        )

    }

}

const mapDispatchToProps = dispatch =>{
    return{
        goToHomePage: () => dispatch(push(routes.root)),
    }
}

export default connect (null, mapDispatchToProps) (ContactPage);