import React, { Component } from "react";
import { connect } from "react-redux";
import  {routes} from "../Router";
import { push, goBack } from "connected-react-router";
import {PaperWrapper, LoginWrapper, LoginPageWrapper, LogoWrapper, Logo, GoBackIcon, PaperLogin,
        LoginInput, PasswordInput, ButtonLogin, CheckboxWrapper, LoginH1} from './style'
import logoImg from "../../images/logo.png"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class LoginPage extends Component {

  render() {
    const { goToSignUpPage, goToHomePage, goToBackPage, goToFeedPage } = this.props;

    return (
      <LoginPageWrapper>

        <LogoWrapper>
          <Logo src={logoImg} onClick={goToHomePage}></Logo>
        </LogoWrapper>
        
        <PaperWrapper>
            <PaperLogin>
              <GoBackIcon onClick={goToBackPage} />
              <LoginH1>ENTRAR</LoginH1>
              <LoginWrapper>
                <LoginInput
                  name="email"
                  type="email"
                  label="E-mail"
                  variant="filled"
                />
                <PasswordInput
                  name="password"
                  type="password"
                  label="Password"
                  variant="filled"
                />

                  <CheckboxWrapper>
                    <FormControlLabel
                      control={<Checkbox color="primary" />}
                      label="Salvar email & senha"
                    />
                    </CheckboxWrapper>
                
                <ButtonLogin variant="contained" color="primary" onClick={goToFeedPage}>Login</ButtonLogin>
              </LoginWrapper>
          </PaperLogin>
        </PaperWrapper>
      </LoginPageWrapper>
      
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    goToSignUpPage: () => dispatch(push(routes.signuppage)),
    goToHomePage: () => dispatch(push(routes.root)),
    goToBackPage: () => dispatch(goBack()),
    goToFeedPage: () => dispatch(push(routes.feedpage))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);