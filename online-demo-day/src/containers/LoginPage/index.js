import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push, goBack } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { PaperWrapper, LoginWrapper, LoginPageWrapper, LogoWrapper, Logo, GoBackIcon } from './style'
import logoImg from "../../images/logo.png"
import { login } from "../../actions/investor/login";


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
          <GoBackIcon onClick={goToBackPage} />
          <LoginWrapper>
            <TextField
              name="email"
              type="email"
              label="E-mail"
              value={email}
              onChange={this.handleInputChange}
              
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              value={password}
              onChange={this.handleInputChange}
            />
            <Button onClick={this.handleLogin}>Login</Button>
            <Button onClick={goToSignUpPage}>CADASTRE-SE</Button>
          </LoginWrapper>
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