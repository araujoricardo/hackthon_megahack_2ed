import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push, goBack } from "connected-react-router";
import { login } from "../../actions/investor/login";
import {PaperWrapper, LoginWrapper, LoginPageWrapper, LogoWrapper, Logo, GoBackIcon, PaperLogin,
        LoginInput, PasswordInput, ButtonLogin, CheckboxWrapper, LoginH1} from './style'
import logoImg from "../../images/logo.png"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleLogin = () => {
    const { email, password } = this.state
    this.props.login(email, password)
  }

  render() {
    const { goToSignUpPage, goToHomePage, goToBackPage } = this.props;
    const { email, password } = this.state

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
                  value={email}
                  onChange={this.handleInputChange}
                />
                <PasswordInput
                  name="password"
                  type="password"
                  label="Password"
                  variant="filled"
                  value={password}
                  onChange={this.handleInputChange}
                />

                  <CheckboxWrapper>
                    <FormControlLabel
                      control={<Checkbox color="primary" />}
                      label="Salvar email & senha"
                    />
                    </CheckboxWrapper>
                
                <ButtonLogin variant="contained" color="primary" onClick={this.handleLogin}>Login</ButtonLogin>
              </LoginWrapper>
          </PaperLogin>
        </PaperWrapper>
      </LoginPageWrapper>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToSignUpPage: () => dispatch(push(routes.signuppage)),
  goToHomePage: () => dispatch(push(routes.root)),
  goToBackPage: () => dispatch(goBack()),
  login: (email, password) => dispatch(login(email, password))
})

export default connect(null, mapDispatchToProps)(LoginPage);