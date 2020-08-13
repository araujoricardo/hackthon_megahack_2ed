import React from 'react';
import {HeaderWrapper, ButtonTop} from './style';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

class Header extends React.Component{





    render(){
        const {goToLoginPage, goToAboutPage, goToErrorPage, goToContactPage} = this.props
        
        return(
            <HeaderWrapper>
                <ButtonTop color="primary" onClick={goToLoginPage}>LOGIN</ButtonTop>
                <ButtonTop color="primary" onClick={goToAboutPage}>SOBRE NÓS</ButtonTop>
                <ButtonTop color="primary" onClick={goToErrorPage}>PLANOS</ButtonTop>
                <ButtonTop color="primary" onClick={goToContactPage}>CONTATO</ButtonTop>
            </HeaderWrapper>
        )
    }



}

const mapDispatchToProps = (dispatch) =>{
    return{
        goToLoginPage: () => dispatch(push(routes.login)),
        goToAboutPage:() => dispatch(push(routes.about)),
        goToErrorPage: () => dispatch(push(routes.errorpage)),
        goToContactPage: () => dispatch(push(routes.contactpage))
    }
  }
  
  export default connect(null, mapDispatchToProps)(Header);