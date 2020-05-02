import React from 'react';
import {PaperWrapper, SignUpWrapper, SignUpPageWrapper, LogoWrapper, Logo, GoBackIcon} from './style';
import { connect } from "react-redux";
import  {routes} from "../Router";
import { push, goBack } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logoImg from "../../images/logo.png"

class SignUpPage extends React.Component{


    render(){
        const { goToSignUpPage, goToBackPage, goToHomePage } = this.props;

        return (
          <SignUpPageWrapper>
    
            <LogoWrapper>
              <Logo src={logoImg} onClick={goToHomePage}></Logo>
            </LogoWrapper>
            
            <PaperWrapper>
              <GoBackIcon onClick={goToBackPage} />
              <SignUpWrapper>
                <TextField
                  name="email"
                  type="email"
                  label="E-mail"
                />
                <TextField
                  name="password"
                  type="password"
                  label="Password"
                />
                <Button onClick={goToSignUpPage}>FINALIZAR</Button>
              </SignUpWrapper>
            </PaperWrapper>
          </SignUpPageWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
      goToSignUpPage: () => dispatch(push(routes.signuppage)),
      goToHomePage: () => dispatch(push(routes.root)),
      goToBackPage: () => dispatch(goBack())
    }
  }

  export default connect(null, mapDispatchToProps)(SignUpPage);